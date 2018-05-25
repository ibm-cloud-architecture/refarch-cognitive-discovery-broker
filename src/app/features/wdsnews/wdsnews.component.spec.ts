import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WDSNewsComponent } from './wdsnews.component';

describe('WDSNewsComponent', () => {
  let component: WDSNewsComponent;
  let fixture: ComponentFixture<WDSNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WDSNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WDSNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
