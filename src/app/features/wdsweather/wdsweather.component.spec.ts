import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WDSWeatherComponent } from './wdsweather.component';

describe('WDSWeatherComponent', () => {
  let component: WDSWeatherComponent;
  let fixture: ComponentFixture<WDSWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WDSWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WDSWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
