
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ShazamApiService } from 'src/service/shazam-api.service';
import { WeatherApiService } from 'src/service/weather-api.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.page.html',
  styleUrls: ['./home.component.page.scss']
})

export class HomeComponentPage implements OnInit {

  public artists: any;
  public tracks: any;
  public weather: any;
  public favoritesList: any[] = [];
  public formGroup: any; // FormGroup



  private music = '';

  constructor(
    private weatherApiService: WeatherApiService,
    private shazamApiService: ShazamApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this._initForm();
    this.getFavorites();
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
    this.music = this._tempCompare(temp);
    const params: any = { term: this.music, locale: 'en-US', offset: '0', limit: '6' }

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

  public getFavorites() {
    const item = localStorage.getItem('favorites');

    if (item && (item !== null || item !== undefined)) {
      this.favoritesList = JSON.parse(item);
    }
  }

  public createFavorites() {
    this.getFavorites();

    let favoritesItem = {};
    const date = new DatePipe('en-US');

    favoritesItem = {
      id: this.favoritesList?.length ? this.favoritesList?.length : 0,
      music: this.music,
      region: this.weather.name,
      temp: this._convertToCel(this.weather.main.temp),
      date: date.transform(Date.now(), 'dd/MM/yyyy'),
      artists: this.artists,
      tracks: this.tracks,
      weather: this.weather
    }

    this.favoritesList.push(favoritesItem);

    localStorage.removeItem('favorites');
    localStorage.setItem('favorites', JSON.stringify(this.favoritesList));
  }

}
