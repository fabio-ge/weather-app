import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lower-info',
  templateUrl: './lower-info.component.html',
  styleUrls: ['./lower-info.component.css'],
})
export class LowerInfoComponent implements OnChanges {
  @Input() data: any = { current: { condition: { text: 'partially cloud' } } };
  text: string = '';
  wind_kph: number = 0;
  humidity: number = 0;
  wind_dir: string = '';

  ngOnChanges() {
    this.text = this.data?.current?.condition?.text || 'Search a city';
    this.humidity = this.data?.current?.humidity;
    this.wind_kph = this.data?.current?.wind_kph;
    this.wind_dir = this.data?.current?.wind_dir;
  }
}
