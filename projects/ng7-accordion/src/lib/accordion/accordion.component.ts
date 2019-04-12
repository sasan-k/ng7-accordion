import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';
import { AccSectionComponent } from '../acc-section/acc-section.component';

@Component({
    selector: 'accordion',

    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit {

    @ContentChildren(AccSectionComponent) sections: QueryList<AccSectionComponent>;

    constructor() { }

    ngAfterContentInit(): void {
        this.sections.forEach(s => s.onClick = (a, el: any) => this.updateState(a, el));
    }

    updateState(clicked: AccSectionComponent, el: any) {
        this.sections.forEach(s => {
            if (clicked === s) {
                s.maxHeight = s.maxHeight ? 0 : el.nativeElement.offsetHeight;
            } else {
                s.maxHeight = 0;
            }
        });
    }
}
