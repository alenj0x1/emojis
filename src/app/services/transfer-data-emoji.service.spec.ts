import { TestBed } from '@angular/core/testing';

import { TransferDataEmojiService } from './transfer-data-emoji.service';

describe('TransferDataEmojiService', () => {
  let service: TransferDataEmojiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferDataEmojiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
