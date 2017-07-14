/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

   return this.http.post('/api/weather/query', body, options)
     .map((res: Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 }

}
