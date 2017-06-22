import { Component,Input } from '@angular/core';
import { SearchResultExtended } from '../model/SearchResultExtended'

@Component({
  selector: 'baseresult',
  templateUrl: './discoverybaseresults.component.html',
  styleUrls: ['./base.css']
})

/*
Present one result element from the discovery search outcome.
*/
export class DiscoveryBaseResultsComponent {
  @Input()
  result: SearchResultExtended;


  constructor () {
  }

}
