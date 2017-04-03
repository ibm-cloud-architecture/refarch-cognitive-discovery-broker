import { Component,Input } from '@angular/core';
import { SearchResult } from './model/SearchResult'

@Component({
  selector: 'results',
  templateUrl: './discoveryresults.component.html'
})

/*
Present the list of returned elements from the discovery search
*/
export class DiscoveryResultsComponent {
  @Input()
  results: SearchResult[];


  constructor () {
  }

}
