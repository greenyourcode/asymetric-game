import { CryptoService } from './../crypto.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  @Output() formEvent = new EventEmitter();
  privateKey;

  form = new FormGroup({
    message: new FormControl(''),
  });

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.privateKey = this.cryptoService.generatePrivateEKey();
  }

  sendMessageHandler() {
    const message = this.form.value?.message;
    const encodedMessage = this.cryptoService.encodeMessage(message, this.cryptoService.publicKey, this.privateKey);
    if (this.cryptoService.publicKey != null) {
      this.formEvent.emit(encodedMessage);
    }
  }
}
