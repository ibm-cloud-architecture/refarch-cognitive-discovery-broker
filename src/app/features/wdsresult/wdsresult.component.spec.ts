import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdsresultComponent } from './wdsresult.component';

describe('WdsresultComponent', () => {
  let component: WdsresultComponent;
  let fixture: ComponentFixture<WdsresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdsresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdsresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
