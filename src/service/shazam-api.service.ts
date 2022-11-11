import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/utils/http.service';

@Injectable({
  providedIn: 'root'
})
export class ShazamApiService {
  url = "https://shazam.p.rapidapi.com/search"

  constructor(private httpService: HttpService) { }

  // getShazam(term: string, locale: string, offset: number, limit: number) {
  //   return this.http.get(`${this.url}?term=${term}&locale=${locale}&offset=${offset}&limit=${limit}&X-RapidAPI-Key=${environment.apikeyshazam}`)
  // }

  getShazam(url: string, params: any) {
    const headers = {
      'X-RapidAPI-Key': environment.apikeyshazam,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }

    const response = this.httpService.httpGet(url, params, headers)
    return response;
  }
}
