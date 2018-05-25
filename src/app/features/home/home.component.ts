import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router: Router) { }

  wdsNews(){
      this.router.navigate(['wdsNews']);
    }


    wdsWeather(){
      this.router.navigate(['wdsWeather']);
    }
}
