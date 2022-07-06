import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadResumeComponent } from './components/upload-resume/upload-resume.component';
import { DialogOverviewExampleDialog, MatchResumeComponent } from './components/match-resume/match-resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatDialogModule} from "@angular/material/dialog";
import { MatchResumeService } from './components/match-resume/match-resume.service';
import { UploadResumeService } from './components/upload-resume/upload-resume.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UploadResumeComponent,
    MatchResumeComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatFileInputModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [MatchResumeService, UploadResumeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
