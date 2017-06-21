import { Injectable }    from '@angular/core';
import { Headers, Http,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DiscoveryService {


  constructor(private http: Http) {
  };

  searchNews(company, product) {
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		let options = new RequestOptions({ headers: headers });
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('company', company);
		urlSearchParams.append('product', product);
		let body = urlSearchParams.toString();

		return this.http.post('/api/news/company/product', body, options)
			.map((res: Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

 searchWeather(query) {
   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
   let options = new RequestOptions({ headers: headers });
   let urlSearchParams = new URLSearchParams();
   urlSearchParams.append('query', query);
   let body = urlSearchParams.toString();

   return this.http.post('/api/weather', body, options)
     .map((res: Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 }
}
