import { CryptoService } from './../crypto.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Player } from '../player.enum';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit, OnChanges {
  @Input() player: Player;
  @Input() encodedMessage: string;
  @Input() publicKey: string;
  @Output() keyGenerationEvent = new EventEmitter();
  @Output() sendingEvent = new EventEmitter();
  form: FormGroup;
  message: string;

  constructor(private cryptoService: CryptoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.message = this.cryptoService.decodeMessage(this.encodedMessage, this.publicKey);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      sendingMessage: new FormControl(''),
      publicKey: new FormControl(''),
    });
  }

  sendingHandler(){
    this.sendingEvent.emit(this.form.value);
    this.cryptoService.createMessage(this.form.value?.sendingMessage, this.publicKey);
  }

}
