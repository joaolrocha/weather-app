import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HttpServiceParam {
    name: string,
    value: string
}

@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient
    ){ }

    public httpGet(url: string , params?: any, headers?: any) {
        return this.http.get(url, { params: params, headers: headers });
    }
}