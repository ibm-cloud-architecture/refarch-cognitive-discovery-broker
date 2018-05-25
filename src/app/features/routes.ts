import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WDSNewsComponent } from './wdsnews/wdsnews.component';
import { WDSWeatherComponent } from './wdsweather/wdsweather.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'wdsNews', component: WDSNewsComponent},
    { path: 'wdsWeather', component: WDSWeatherComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
