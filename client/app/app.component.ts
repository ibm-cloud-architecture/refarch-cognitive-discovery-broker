import { Component } from '@angular/core';
import { DiscoveryService } from './discovery.service';
import { SearchResult } from './model/SearchResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor (private discoveryService: DiscoveryService) {}
  searchResults: any;

	supplierSearch(company, product) {
		this.discoveryService.search(company,product).subscribe(data => {
      console.log(data);
      this.searchResults=data;
    }, error => {
      console.log(error);
      return "Error on discovery service";
    })
	}

	supplierAll() {

	}

}
