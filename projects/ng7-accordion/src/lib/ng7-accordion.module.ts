import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccSectionComponent } from './acc-section/acc-section.component';

@NgModule({
  declarations: [AccordionComponent, AccSectionComponent],
  imports: [ CommonModule
  ],
  exports: [AccordionComponent, AccSectionComponent]
})
export class Ng7AccordionModule { }
