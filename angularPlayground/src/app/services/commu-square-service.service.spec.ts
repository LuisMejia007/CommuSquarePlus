import { TestBed, inject } from '@angular/core/testing';

import { CommuSquareServiceService } from './commu-square-service.service';

describe('CommuSquareServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommuSquareServiceService]
    });
  });

  it('should be created', inject([CommuSquareServiceService], (service: CommuSquareServiceService) => {
    expect(service).toBeTruthy();
  }));
});
