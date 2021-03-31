import { TestBed } from '@angular/core/testing';

import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should encode message', () => {
    const message = 'mon message';
    const publicKey = 'my public key';
    const privateKey = 'my privateKey';
    const encodedMessageExpected = 'mon message';

    const encodedMessage = service.encodeMessage(message, publicKey, privateKey);

    expect(encodedMessage).toEqual(encodedMessageExpected);
  });

  it('should not encode message', () => {
    const message = 'mon message';
    const publicKey = 'my public key';
    const privateKey = 'my privateKey';
    const encodedMessageExpected = 'mon messafqdofjhsqdjf hkjdshfkj hqsge';

    const encodedMessage = service.encodeMessage(message, publicKey, privateKey);

    expect(encodedMessage).not.toEqual(encodedMessageExpected);
  });
});
