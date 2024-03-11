import { TestBed } from '@angular/core/testing';

import { ManagePreferencesService } from './manage-preferences.service';

describe('ManagePreferencesService', () => {
  let service: ManagePreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagePreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
