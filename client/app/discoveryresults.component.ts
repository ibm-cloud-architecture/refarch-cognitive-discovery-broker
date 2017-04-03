import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './discoveryresults.component.html'
})
export class DiscoveryResultsComponent {
  @Input()
  company: string;
  @Input()
  product: string;
  
}
