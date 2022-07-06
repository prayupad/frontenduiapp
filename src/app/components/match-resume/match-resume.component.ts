import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatchedResume } from 'src/app/models/matched-resume';
import { MatchedResumesWrapper } from 'src/app/models/matched-resumes-wrapper';
import { MatchResumeService } from './match-resume.service';

@Component({
  selector: 'app-match-resume',
  templateUrl: './match-resume.component.html',
  styleUrls: ['./match-resume.component.scss']
})
export class MatchResumeComponent implements OnInit {
  indexId: string;
  matchResumeForm: FormGroup;

  sampleMatchedResume: MatchedResumesWrapper;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog,
              private matchResumeService: MatchResumeService) {
    this.matchResumeForm = new FormGroup({
      file: new FormControl()
    })
  }

  ngOnInit(): void {
    this.indexId = "CV_Business_Analyst_Bridgentech";
  }

  matchResumes(){
    console.log("Matching resumes...");
    const file = this.matchResumeForm.get('file').value;
    console.log("selected file", file);
    if(!file){
      this._snackBar.open("Please select a JD", "OK");
      return;
    }

    const formData = new FormData();
    formData.append('jobDescFile', file);
    formData.append('indexList', this.indexId);

    console.log("match resume filled form data", formData);
    this.matchResumeService.matchResume(formData).subscribe(
      result => {
        console.log("Match resume success", result);
        this.sampleMatchedResume = result;
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '800px',
          data: this.sampleMatchedResume,
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.sampleMatchedResume.matchedResumeList = result;
        });
      },
      error=>{
        console.log("Match resume failed", error);
        this._snackBar.open("Match resumes failed, please try again", "OK");
        // this.prepareMockData();
        // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        //   width: '800px',
        //   data: this.sampleMatchedResume,
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.sampleMatchedResume.matchedResumeList = result;
        // });
      }
    )
  }

  prepareMockData() {
    this.sampleMatchedResume = new MatchedResumesWrapper();
    this.sampleMatchedResume.matchedResumeList = [];
    this.sampleMatchedResume.matchedResumeList.push({
      emailId: 'durga@gmail.com',
      mobileNumber: '9182021654',
      resumeScore: 99
    })
    this.sampleMatchedResume.matchedResumeList.push({
      emailId: 'sravan@gmail.com',
      mobileNumber: '9999999999',
      resumeScore: 99
    })
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['dialog-overview-example-dialog.scss']
})
export class DialogOverviewExampleDialog {
  tableData: MatchedResume[];
  externalUrl: string;
  displayedColumns: string[] = ['emailId','mobileNumber','resumeScore']
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MatchedResumesWrapper,
  ) {
    console.log("Resume matched wrapper", data)
    this.tableData = data.matchedResumeList;
    this.externalUrl = data.urlForUi;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
