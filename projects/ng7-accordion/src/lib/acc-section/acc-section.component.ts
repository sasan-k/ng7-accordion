import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'acc-section',
    templateUrl: './acc-section.component.html',
    styleUrls: ['./acc-section.component.scss']
})
export class AccSectionComponent implements OnInit {

    @Input() accTitle = 'Title';
    @ViewChild('sectionRef') section: ElementRef;
    onClick: Function;
    maxHeight = 0;
    ref: AccSectionComponent;

    constructor() { }

    ngOnInit() {
        this.ref = this;
    }

}
