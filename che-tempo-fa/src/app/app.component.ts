import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'che-tempo-fa';
  weatherData: any = {};

  constructor(private ws: WeatherServiceService) {}

  onSubmit(f: NgForm) {
    this.ws.getWeatherData(f.value.city).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
