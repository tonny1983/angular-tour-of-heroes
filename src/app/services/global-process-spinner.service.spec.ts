import { TestBed } from '@angular/core/testing';

import { GlobalProcessSpinnerService } from './global-process-spinner.service';

describe('GlobalProcessSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalProcessSpinnerService = TestBed.get(GlobalProcessSpinnerService);
    expect(service).toBeTruthy();
  });
});
