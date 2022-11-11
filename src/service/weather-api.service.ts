import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/utils/http.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private httpService: HttpService) { }

  // getWeather(lon: string, lat: string) {
  //   return this.http.get(`${this.url}?lat=${lat}&lon=${lon}&appid=${environment.apikeyweather}`)
  // }

  getWeather(url: string, params: any) {
    const response = this.httpService.httpGet(url, params)
    return response;
  }
}
