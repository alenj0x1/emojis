import { TestBed } from '@angular/core/testing';

import { GetDataEmojiService } from './get-data-emoji.service';

describe('GetDataEmojiService', () => {
  let service: GetDataEmojiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataEmojiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
