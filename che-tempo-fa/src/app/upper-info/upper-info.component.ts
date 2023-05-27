import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-upper-info',
  templateUrl: './upper-info.component.html',
  styleUrls: ['./upper-info.component.css'],
})
export class UpperInfoComponent implements OnChanges {
  @Input() data: any;
  temp: number = 0;
  tempIcon: string = '';

  ngOnChanges() {
    this.temp = this.data?.current?.temp_c;
    this.tempIcon = this.data?.current?.condition?.icon;
  }
}
