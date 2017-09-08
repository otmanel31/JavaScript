import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FileUploadModule } from "ng2-file-upload";
import {TruncatePipe} from "angular-pipes/src/string/truncate.pipe";
import {BytesPipe} from "angular-pipes/src/math/bytes.pipe";


import { AppComponent } from './app.component';
import { ImageListeComponent } from './component/image-liste/image-liste.component';
import { ImageLEditComponent } from './component/image-ledit/image-ledit.component';
import { ImageUploadComponent } from './component/image-upload/image-upload.component';

import { ImageService } from "./service/image.service";

@NgModule({
  declarations: [
    AppComponent,
    ImageListeComponent,
    ImageLEditComponent,
    ImageUploadComponent,
    TruncatePipe,
    BytesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpModule, FileUploadModule, 
    RouterModule.forRoot([
      {path: "home", component: ImageListeComponent },
      {path: "edit/:id", component: ImageLEditComponent },
      {path: "upload", component: ImageUploadComponent },
      {path: "", redirectTo: "/home", pathMatch:"full" }
    ])
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
