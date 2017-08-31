import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ClientEditComponent } from './component/client-edit/client-edit.component';
import { ClientListeComponent } from './component/client-liste/client-liste.component';
import { ClientService } from "./services/client.service";

@NgModule({
  declarations: [
    AppComponent,
    ClientEditComponent,
    ClientListeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
