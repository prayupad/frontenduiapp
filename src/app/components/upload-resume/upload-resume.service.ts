import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateIndex } from 'src/app/models/create-index';
import { ResultStatusInfo } from 'src/app/models/result-status-info';

@Injectable({
  providedIn: 'root'
})
export class UploadResumeService {

  aiServiceHost: string = "http://frontend.52.186.44.18.nip.io/ai-service/api/v1";

  constructor(private httpClient: HttpClient) { }

  createIndex(createIndex: CreateIndex): Observable<ResultStatusInfo>{
    let url = this.aiServiceHost+'/create/index';
    return this.httpClient.post<ResultStatusInfo>(url, createIndex);
  }

  uploadResume(formData: FormData): Observable<ResultStatusInfo>{
    let url = this.aiServiceHost+'/index/resume';
    return this.httpClient.post<ResultStatusInfo>(url, formData);
  }
}
