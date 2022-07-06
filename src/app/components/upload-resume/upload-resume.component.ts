import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateIndex } from 'src/app/models/create-index';
import { ResultStatusInfo } from 'src/app/models/result-status-info';
import { UploadResumeService } from './upload-resume.service';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.scss']
})
export class UploadResumeComponent implements OnInit {
  indexId: string;
  mobile: string;
  email: string;
  uploadResumeForm: FormGroup;

  constructor(private _snackBar: MatSnackBar, private uploadService: UploadResumeService,
              private router: Router) {
    this.uploadResumeForm = new FormGroup({
      file: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl()
    });
  }

  ngOnInit(): void {
    this.indexId = "CV_Business_Analyst_Bridgentech";
    this.createIndex();
  }

  createIndex(){
    var createIndexRequest = new CreateIndex();
    createIndexRequest.indexId = this.indexId;
    createIndexRequest.indexType = "Resume";
    this.uploadService.createIndex(createIndexRequest).subscribe(
      result => {
        console.log("Creating index result", result);
      },
      error=>{
        console.log("Creating index failed", error);
        this._snackBar.open("Failed to create index, please contact support", "OK");
      }
    )
  }

  uploadResume(){
    console.log("Uploading resume...");
    console.log("this.mobile ", this.mobile);
    console.log("this.email ", this.email);
    if(!this.mobile || this.mobile==='' || !this.email || this.email===''){
      this._snackBar.open("Please input all the data", "OK");
      return;
    }

    const file = this.uploadResumeForm.get('file').value;
    console.log("selected file", file);
    if(!file){
      this._snackBar.open("Please select a resume", "OK");
      return;
    }

    const formData = new FormData();
    formData.append('resumeFile', file)
    formData.append('emailId', this.email)
    formData.append('mobileNumber', this.mobile)
    formData.append('indexId', this.indexId);

    console.log("filled form data", formData);
    this.uploadService.uploadResume(formData).subscribe(
      result => {
        console.log("Upload resume result", result);
        var resultInfo: ResultStatusInfo = result;
        this._snackBar.open("Upload success", "OK");
        this.router.navigate(['/match-resume']);
      },
      error => {
        console.log("Uploading resume failed", error);
        this._snackBar.open("Upload Failed, Please try again", "OK");
        this.router.navigate(['/match-resume']);
      }
    )
  }

}
