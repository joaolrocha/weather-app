import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  url = "https://api.openweathermap.org/data/2.5/weather"

  constructor(private http: HttpClient) { }

  get(lon: string , lat: string) {
    return this.http.get(`${this.url}?lat=${lat}&lon=${lon}&appid=${environment.apikey}`)
  }
}
