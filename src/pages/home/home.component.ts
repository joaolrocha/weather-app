
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShazamApiService } from 'src/service/shazam-api.service';
import { WeatherApiService } from 'src/service/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public artists: any;
  public tracks: any;

  constructor(private weatherApiService: WeatherApiService, private shazamApiService: ShazamApiService) { }

  ngOnInit(): void {
    this._weather();
    // this.shazamApiService.getShazam("0", "0", 0, 0).subscribe(resp => {console.log(resp)})
  }

  private async _weather() {
    const params = {
      lat: '0',
      lon: '0',
      appid: environment.apikeyweather
    }

    this._getWeather(environment.API_URL_WEATHER, params).then(
      (response: any) => {
        console.log('response', response);
        console.log('response.main.temp', this._fahToCel(response.main.temp));
        // this._shazam(this._fahToCel(response.main.temp))
        this._shazam(35)
      }
    ).catch(
      (error) => {
        console.log("error", error)
      }
    )
  }

  private _getWeather(url: string, params: any) {
    return new Promise((resolve, reject) => {
      this.weatherApiService.getWeather(url, params).subscribe(
        (response: any) => {
          resolve(response)
        },
        error => {
          reject(error);
        });
    });
  }

  private _fahToCel(fahrenheit: number) {
    const celsius = Math.round((fahrenheit - 32) * (5 / 9));
    return celsius;
  }


  private async _shazam(temp: number) {
    const music = this._tempCompare(temp);
    const params: any = { term: music, locale: 'en-US', offset: '0', limit: '5' }

    this._getShazam(environment.API_URL_SHAZAM, params).then(
      (response: any) => {
        console.log('response', response);
        this.artists = response?.artists?.hits;
        this.tracks = response?.tracks?.hits;
      }
    ).catch(
      (error) => {
        console.log("error", error)
      }
    )
  }

  private _getShazam(url: string, params: any) {
    return new Promise((resolve, reject) => {
      this.shazamApiService.getShazam(url, params).subscribe(
        (response: any) => {
          resolve(response)
        },
        error => {
          reject(error);
        });
    });
  }

  private _tempCompare(temp: number) {
    let retorno = 'lofi';
    
    if(temp > 32) { retorno = 'rock' }
    if(temp > 24 && temp < 32) { retorno = 'pop' }
    if(temp > 16 && temp < 24) {retorno = 'classica' }
    
    return retorno;
  }

}
