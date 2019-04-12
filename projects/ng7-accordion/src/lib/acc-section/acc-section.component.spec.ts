import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSectionComponent } from './acc-section.component';

describe('AccSectionComponent', () => {
  let component: AccSectionComponent;
  let fixture: ComponentFixture<AccSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
