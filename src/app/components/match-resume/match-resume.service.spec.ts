import { TestBed } from '@angular/core/testing';

import { MatchResumeService } from './match-resume.service';

describe('MatchResumeService', () => {
  let service: MatchResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
