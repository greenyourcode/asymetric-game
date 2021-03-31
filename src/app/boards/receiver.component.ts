import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit, OnChanges {
  @Input() message;
  decodedMessage: string;

  constructor(private cryptoService: CryptoService) { }

  ngOnChanges() {
    this.decodedMessage = this.cryptoService.decodeMessage(
      this.message, this.cryptoService.publicKey, this.cryptoService.generatePrivateRKey());
  }

  ngOnInit(): void {
  }

  generateKeyHandler() {
    this.cryptoService.generatePrivateRKey();
    this.cryptoService.generatePublicKey();
  }

}
