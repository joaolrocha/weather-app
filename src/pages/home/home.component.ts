
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  public weather: any;
  public formGroup: any; // FormGroup

  constructor(
    private weatherApiService: WeatherApiService,
    private shazamApiService: ShazamApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.formGroup = this.formBuilder.group({
      lat: '',
      long: ''
    });
  }

  private _createForm(): FormGroup {
    return new FormGroup({
      lat: new FormControl(''),
      lon: new FormControl('')
    })
  }

  private async _weather(data: any) {
    // const params = {
    //   lat: data.lat,
    //   lon: data.long,
    //   appid: environment.apikeyweather
    // }

    const params = {
      lat: -22.9035,
      lon: -43.2096,
      appid: environment.apikeyweather
    }

    this._getWeather(environment.API_URL_WEATHER, params).then(
      (response: any) => {
        this.weather = response;
        const celsius = this._convertToCel(this.weather.main.temp);
        this._shazam(celsius);
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

  private _convertToCel(temp: number) {
    const celsius = temp.toString().slice(0, 2);;
    return parseInt(celsius);
  }


  private async _shazam(temp: number) {
    const music = this._tempCompare(temp);
    const params: any = { term: music, locale: 'en-US', offset: '0', limit: '5' }

    this._getShazam(environment.API_URL_SHAZAM, params).then(
      (response: any) => {
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

    if (temp > 32) { retorno = 'rock' }
    if (temp > 24 && temp < 32) { retorno = 'pop' }
    if (temp > 16 && temp < 24) { retorno = 'classica' }

    return retorno;
  }

  public onSubmit(formData: any) {
    const param = {
      lat: formData['lat'],
      long: formData['long']
    }
    this._weather(param)
  }

  public createFavorites() {
    let item;
    let favoritesItem = {};
    let favoritesList = [];

    item = localStorage.getItem('favorites');

    if (item && (item !== null || item !== undefined)) {
      favoritesList.push(JSON.parse(item));
    }

    favoritesItem = {
      artists: this.artists,
      tracks: this.tracks,
      weather: this.weather
    }
    favoritesList.push(favoritesItem)

    localStorage.removeItem('favorites');
    localStorage.setItem('favorites', JSON.stringify(favoritesList));

    console.log(favoritesList);
  }

}
