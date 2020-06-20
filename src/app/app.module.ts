import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice-1/exercice-1.component';

// j'importe ma class de directive et j'oublie pas de la déclaré dans ngModule
import { ColorDirective } from './exercice-1/color.directive';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    ColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
