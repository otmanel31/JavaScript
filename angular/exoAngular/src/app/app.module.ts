import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppEditComponent } from './component/app-edit/app-edit.component';
import { ListeComponent } from './component/liste/liste.component';
import { ProduitService } from "./services/produit.service";
import { MajusculePipe } from './pipes/majuscule.pipe';
import { WhereStartWithPipe } from './pipes/where-start-with.pipe';

import { RouterModule } from "@angular/router";
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AppEditComponent,
    ListeComponent,
    MajusculePipe,
    WhereStartWithPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "home", component: ListeComponent},
      {path: "edition", component: AppEditComponent},
      {path: "about", component: AboutComponent},
      {path: "", redirectTo:'/home', pathMatch: "full"}
    ])
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
