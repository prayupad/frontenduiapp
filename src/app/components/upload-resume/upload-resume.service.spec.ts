import { TestBed } from '@angular/core/testing';

import { UploadResumeService } from './upload-resume.service';

describe('UploadResumeService', () => {
  let service: UploadResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
