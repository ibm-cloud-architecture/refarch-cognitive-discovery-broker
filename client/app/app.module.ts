import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { DiscoveryService } from './wds/discovery.service';
import { WDSNewsComponent } from './wds/WDSNewsComponent';
import { WDSWeatherComponent } from './wds/WDSWeatherComponent';
import { DiscoveryBaseResultsComponent } from './wds/discoverybaseresults.component';
import { DiscoveryResultsComponent } from './wds/discoveryresults.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'wdsNews', component: WDSNewsComponent},
  { path: 'wdsWeather', component: WDSWeatherComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoveryResultsComponent,
    DiscoveryBaseResultsComponent,
    WDSNewsComponent,
    WDSWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DiscoveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
