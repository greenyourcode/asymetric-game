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
  @Output() keyGenerationEvent = new EventEmitter();
  form: FormGroup;
  messageP1: string;
  messageP2: string;
  Player = Player;

  constructor(private cryptoService: CryptoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.player === Player.Player1) {
      this.messageP1 = this.cryptoService.decodeMessage(this.encodedMessage, this.cryptoService.publicKey);
    } else if (this.player === Player.Player2) {
      this.messageP2 = this.cryptoService.decodeMessage(this.encodedMessage, this.cryptoService.publicKey);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      sendingMessage: new FormControl(''),
    });
  }

  sendingHandler() {
    const message = this.form.value?.sendingMessage;
    let encodeMessage;
    if (this.cryptoService.publicKey != null) {
      if (this.player === Player.Player1) {
        encodeMessage = this.cryptoService.createMessage(message, this.cryptoService.publicKey, this.cryptoService.generatePrivateRKey());
        this.cryptoService.messageP2$.next(encodeMessage);
      } else if (this.player === Player.Player2) {
        encodeMessage = this.cryptoService.createMessage(message, this.cryptoService.publicKey, this.cryptoService.generatePrivateRKey());
        this.cryptoService.messageP1$.next(encodeMessage);
      }
    }
  }

}
