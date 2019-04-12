import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent, AccSectionComponent } from 'ng7-accordion';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
