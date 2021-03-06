import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  publicKey: string;
  messageP1$ = new Subject();
  messageP2$ = new Subject();

  constructor() { }

  generatePublicKey() {
    this.publicKey = uuidv4();
  }

  generatePrivateRKey() {
    return 'receiver_key';
  }

  generatePrivateEKey() {
    return 'emitter_key';
  }

  encodeMessage(message: string, publicKey: string, privateKey?: string) {
    return message;
  }

  decodeMessage(encodedMessage: string, publicKey: string, privateKey?: string) {
    return encodedMessage;
  }

  createMessage(message: string, publicKey: string, privateKey: string) {
    const encodedMessage = this.encodeMessage(message, publicKey, privateKey);
    return encodedMessage;
  }
}
