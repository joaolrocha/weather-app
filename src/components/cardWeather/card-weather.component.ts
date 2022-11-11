import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'component-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss']
})
export class CardWeatherComponent implements OnInit {

  @Input() weather: any;
  public temp: any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(this.weather)
  }

  public convertToCel(temp: number) {
    const celsius = temp.toString().slice(0, 2);;
    return celsius + '°';
  }

}
