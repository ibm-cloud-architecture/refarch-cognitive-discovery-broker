import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdsbaseresultComponent } from './wdsbaseresult.component';

describe('WdsbaseresultComponent', () => {
  let component: WdsbaseresultComponent;
  let fixture: ComponentFixture<WdsbaseresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdsbaseresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdsbaseresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
