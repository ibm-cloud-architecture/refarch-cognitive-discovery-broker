import { Component } from '@angular/core';
import { DiscoveryService } from './discovery.service';

@Component({
  selector: 'wdsweather',
  templateUrl: './WDSWeather.component.html',
  styleUrls: ['./wdsbase.component.css']
})
export class WDSWeatherComponent {


  constructor (private discoveryService: DiscoveryService) {
  }

  personas : string[] = ["Resident","Emergency Worker","Store Manager"];
  queries : string[]=["query a","query b","query c"];
  selectedPersona : string;
  selectedQuery : string;
  query : string="";
  searchResults: any;

  onSelectPersona(){
    console.log("On select:"+this.selectedPersona);
    if ("Resident" == this.selectedPersona) {
      this.queries=["query a","query b","query c"];

    } else {
      this.queries=["query aa","query bb","query cc"];
    }
    this.query=this.queries[0];
  }

  onSelectQuery(){
    console.log("Query on select:"+this.selectedQuery);
    if (this.selectedQuery) {
      this.query = this.selectedQuery;
    }
  }

  weatherSearch(query:string){
    console.log(query);
    this.discoveryService.searchWeather(this.query).subscribe(data => {
        console.log(data);
        this.searchResults=data;
      }, error => {
        console.log(error);
        return "Error on discovery service";
      })
  }
}
