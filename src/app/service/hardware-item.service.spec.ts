import { TestBed } from '@angular/core/testing';

import { HardwareItemService } from './hardware-item.service';

describe('HardwareItemService', () => {
  let service: HardwareItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
