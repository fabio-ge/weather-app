import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  baseUrl: string = 'https://weatherapi-com.p.rapidapi.com/current.json';
  headers: HttpHeaders = new HttpHeaders()
    .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com')
    .set(
      'X-RapidAPI-Key',
      'bde041a9e8msh12bda5e84e4ceb2p19e438jsnbc3246a073df'
    );
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + '?q=' + cityName, {
      headers: this.headers,
    });
  }
}
