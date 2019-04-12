import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent, AccSectionComponent } from '../public_api';

@NgModule({
  declarations: [AccordionComponent, AccSectionComponent],
  imports: [ CommonModule
  ],
  exports: [AccordionComponent, AccSectionComponent]
})
export class Ng7AccordionModule { }
