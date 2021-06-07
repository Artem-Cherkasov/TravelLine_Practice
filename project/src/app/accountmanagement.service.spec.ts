import { TestBed } from '@angular/core/testing';

import { AccountmanagementService } from './accountmanagement.service';

describe('AccountmanagementService', () => {
  let service: AccountmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
