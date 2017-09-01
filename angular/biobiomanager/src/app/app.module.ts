import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProduitListeComponent } from './components/produit-liste/produit-liste.component';
import { ProduitEditComponent } from './components/produit-edit/produit-edit.component';
import { ProduitService } from "./services/produit.service";

@NgModule({
  declarations: [
    AppComponent,
    ProduitListeComponent,
    ProduitEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
