import { Component } from '@angular/core';
import { DiscoveryService } from './discovery.service';
import { RoleQuery } from '../model/RoleQuery';
import {Accordion, AccordionGroup} from './accordion';

@Component({
  selector: 'wdsweather',
  templateUrl: './WDSWeather.component.html',
  styleUrls: ['./wdsbase.component.css'],

})

export class WDSWeatherComponent {
  roleQuery: RoleQuery[] = [];
  personas : string[] = ["Resident","Emergency Worker","Store Manager"];

  constructor (private discoveryService: DiscoveryService) {
    this.roleQuery[this.personas[0]]=new RoleQuery(this.personas[0],[
      "Tell me about the science of hurricane",
      "What are the deadliest atlantic hurricane",
      "How do I prepare for the hurricane?",
      "Where can I find instructions to put up shutters",
      "I live in Miami dade county, what are the emergency numbers",
      "I am a pet owner and I want to know how to prepare for my pet",
      "I have an elderly and disabled person in the household. Are there any special preparations?",
      "What are different categories of hurricane?",
      "What are the emergency agencies?",
      "What are the grocery items I need to stack up?",
    ]);
    this.roleQuery[this.personas[1]]=new RoleQuery(this.personas[1],[
      "what do I need to know about dealing with power lines?",
      "I need to know more about trees and how to handle them. I need instructions specific to my area which is Miami dade county (or leon county)",
      "I need a checklist to prepare for Hurricane"
    ]);
    this.roleQuery[this.personas[2]]=new RoleQuery(this.personas[2],[
      "I run a distribution center and expecting a shipment of milk next week. What kind of disruption should I prepare for?",
      "I am a hardware store owner and I need to know how my business will be affected",
      "I have a lot of computers and electronic systems in my store. Is there any thing I need to do as a business owner to prepare for hurricanes?",
      "I need to get a large consignment of hard disks by next week. Is it likely to be delayed?"
    ]);
  }


  queries : string[]=["query a","query b","query c"];
  selectedPersona : string;
  selectedQuery : string;
  query : string="";
  searchResults: any;

  onSelectPersona(){
    console.log("On select:"+this.selectedPersona);
    this.queries=this.roleQuery[this.selectedPersona].queries;
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
    this.discoveryService.searchWeather(this.query).subscribe(
      data => {
        console.log(data);
        this.searchResults=data;
      },
      error => {
        console.log(error);
        return "Error on discovery service";
      })
  }

  weatherMockup(){
    this.discoveryService.getMockupAnswer().subscribe(
      data => {
        this.searchResults=data;
      },
      error => {
        console.log(error);
        return "Error on discovery service";
      })
  }
}
