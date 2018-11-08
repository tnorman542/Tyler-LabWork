import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsService {
    constructor( private httpClient:HttpClient ) {}

    getNewsItems() {
        return this.httpClient.get<[{title:string, body:string}]>
            ('/assets/news_data.json');
    }
}