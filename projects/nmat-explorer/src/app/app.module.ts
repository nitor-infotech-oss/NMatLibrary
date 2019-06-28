import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NmatTreeModule } from 'nmat-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NmatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
