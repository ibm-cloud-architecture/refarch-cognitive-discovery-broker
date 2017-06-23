import { Component,Input,ViewChild } from '@angular/core';
import { SearchResultExtended } from '../model/SearchResultExtended'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

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

  @ViewChild('textDialog') modal: ModalComponent;

  constructor () {
  }

  open(){
      this.modal.open();
  }
}
