import { CryptoService } from './crypto.service';
import { Component } from '@angular/core';
import { Player } from './player.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asymetric-game';
  Player = Player;
  publicKey: string;
  encodedMessage: string;

  constructor(public cryptoService: CryptoService) {
  }

  onKeyGeneration() {
    this.cryptoService.generatePublicKey();
  }

  // case 2
  onMessageEmitterEvent(encodedMessage: any) {
    this.encodedMessage = encodedMessage;
  }
}
