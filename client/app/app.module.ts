import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DiscoveryResultsComponent } from './discoveryresults.component';
import { AppComponent } from './app.component';
import { DiscoveryService } from './discovery.service';

@NgModule({
  declarations: [
    AppComponent,DiscoveryResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DiscoveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
