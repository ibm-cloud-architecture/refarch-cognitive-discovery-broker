import { Component,Input } from '@angular/core';
import { SearchResult } from '../model/SearchResult'

@Component({
  selector: 'baseresults',
  templateUrl: './discoverybaseresults.component.html',
  styleUrls: ['./base.css']
})

/*
Present the list of returned elements from the discovery search
*/
export class DiscoveryBaseResultsComponent {
  @Input()
  results: SearchResult[];


  constructor () {
  }

}
