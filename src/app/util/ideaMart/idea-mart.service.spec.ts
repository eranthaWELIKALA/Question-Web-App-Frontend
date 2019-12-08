import { TestBed } from '@angular/core/testing';

import { IdeaMartService } from './idea-mart.service';

describe('IdeaMartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaMartService = TestBed.get(IdeaMartService);
    expect(service).toBeTruthy();
  });
});
