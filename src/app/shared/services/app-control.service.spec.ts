import { TestBed } from '@angular/core/testing';

import { AppControlService } from './app-control.service';

describe('AppControlService', () => {
  let service: AppControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
