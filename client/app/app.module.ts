/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
import {Accordion, AccordionGroup} from './wds/accordion';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

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
    Accordion,
    AccordionGroup,
    WDSNewsComponent,
    WDSWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DiscoveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
