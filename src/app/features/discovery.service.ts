import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  constructor(private http: HttpClient) { }

  searchNews(company, product): Observable<Object> {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })};
    let body = {'company':company, 'product': product};
    return this.http.post('/api/news/company/product', body, options);
  }

  searchWeather(query): Observable<Object> {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })};
    let body = {'query': query};
    return this.http.post('/api/weather/query', body, options);
  }
}
