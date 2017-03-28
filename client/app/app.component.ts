import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor (private http: Http) {}

	supplierSearch(company, product) {
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		let options = new RequestOptions({ headers: headers });
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('company', company);
		urlSearchParams.append('product', product);
		let body = urlSearchParams.toString();

		return this.http.post('/api/discovery/company/product', body, options)
			.map((res: Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	supplierAll() {
		return this.http.get('/api/discovery/all')
			.map((res: Response) => console.log());

	}
	
}
