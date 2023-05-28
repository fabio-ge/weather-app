import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  baseUrl: string = 'https://weatherapi-com.p.rapidapi.com/current.json';

  constructor(private http: HttpClient) {}

  getWeatherData(apiSecret: string | null, cityName: string): Observable<any> {
    if (!apiSecret) apiSecret = '';
    return this.http.get<any>(this.baseUrl + '?q=' + cityName, {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com')
        .set('X-RapidAPI-Key', apiSecret),
    });
  }
}
