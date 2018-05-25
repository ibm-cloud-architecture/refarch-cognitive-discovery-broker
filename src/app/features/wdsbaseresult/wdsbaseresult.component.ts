import { Component, Input } from '@angular/core';
import { SearchResultExtended } from '../model/SearchResultExtended'
@Component({
  selector: 'app-wdsbaseresult',
  templateUrl: './wdsbaseresult.component.html',
  styleUrls: ['./wdsbaseresult.component.css']
})
export class WDSBaseResultComponent  {
  @Input()
    result: SearchResultExtended;
  constructor() { }

  openText() : void {}

}
