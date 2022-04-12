import { TestBed } from '@angular/core/testing';

import { GetAPIService } from './get-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetAPIService', () => {
  let service: GetAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
