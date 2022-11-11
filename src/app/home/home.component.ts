import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../shared/service/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private weatherApi:WeatherApiService) { }

  ngOnInit(): void {
    this.weatherApi.get("0", "0").subscribe(resp => {console.log(resp)})
  }

}
