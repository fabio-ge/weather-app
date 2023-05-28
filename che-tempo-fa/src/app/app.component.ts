import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather.service';
import { NgForm } from '@angular/forms';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'che-tempo-fa';
  apiSecret: string | null = '';
  key = '';
  weatherData: any = {};

  constructor(
    private ws: WeatherServiceService,
    private localS: LocalService
  ) {}

  ngOnInit(): void {
    this.apiSecret = this.localS.getItem('key');
  }

  saveKey() {
    this.localS.setItem('key', this.key);
    this.apiSecret = this.key;
  }

  onSubmit(f: NgForm) {
    this.ws.getWeatherData(this.apiSecret, f.value.city).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
