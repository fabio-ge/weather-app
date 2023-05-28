import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UpperInfoComponent } from './upper-info/upper-info.component';
import { LowerInfoComponent } from './lower-info/lower-info.component';
import { WeatherServiceService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalService } from './services/local.service';

@NgModule({
  declarations: [AppComponent, UpperInfoComponent, LowerInfoComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [WeatherServiceService, LocalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
