import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { ListeProfilsComponent } from './component/liste-profils/liste-profils.component';
import { ProfilService } from "./service/profil.service";
import { EditProfilComponent } from './component/edit-profil/edit-profil.component';
import { AboutComponent } from './component/about/about.component';
import { FieldsortPipe } from './pipe/fieldsort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListeProfilsComponent,
    EditProfilComponent,
    AboutComponent,
    FieldsortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "home", component: ListeProfilsComponent},
      {path: "about", component: AboutComponent},
      {path: "edit/:id", component: EditProfilComponent},
      {path: "", redirectTo:"/home", pathMatch:"full"}
  ])
  ],
  providers: [ProfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
