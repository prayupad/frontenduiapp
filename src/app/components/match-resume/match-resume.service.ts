import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchedResumesWrapper } from 'src/app/models/matched-resumes-wrapper';

@Injectable({
  providedIn: 'root'
})
export class MatchResumeService {

  //aiServiceHost: string = "http://localhost:8086/api/v1";
  aiServiceHost: string = "http://frontend.52.186.44.18.nip.io/ai-service/api/v1";

  constructor(private httpClient: HttpClient) { }

  matchResume(formData: FormData): Observable<MatchedResumesWrapper>{
    let url = this.aiServiceHost+'/matchResumes/job';
    return this.httpClient.post<MatchedResumesWrapper>(url, formData);
  }

}
