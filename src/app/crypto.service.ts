import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  publicKey: string;
  message$ = new Subject();

  constructor() { }

  generatePublicKey() {
    return uuidv4();
  }

  encodeMessage(message: string, publicKey: string) {
    return message;
  }

  decodeMessage(encodedMessage: string, publicKey: string) {
    return encodedMessage;
  }

  createMessage(message: string, publicKey: string) {
    const encodedMessage = this.encodeMessage(message, publicKey);
    this.message$.next(encodedMessage);
  }
}
