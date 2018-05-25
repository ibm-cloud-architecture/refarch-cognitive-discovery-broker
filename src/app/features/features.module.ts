import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WDSNewsComponent } from './wdsnews/wdsnews.component';
import { WDSResultComponent } from './wdsresult/wdsresult.component';
import { WDSWeatherComponent } from './wdsweather/wdsweather.component';
import { SharedModule } from '../shared/shared.module';
import { WDSBaseResultComponent } from './wdsbaseresult/wdsbaseresult.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [HomeComponent, WDSNewsComponent, WDSResultComponent, WDSWeatherComponent, WDSBaseResultComponent],
  exports: [HomeComponent, WDSNewsComponent, WDSResultComponent, WDSBaseResultComponent]
})
export class FeaturesModule { }
