import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditService {

  baseUrl: string;



  constructor(private _http:Http) {

      this.baseUrl='https://www.reddit.com/r';
      //this.baseUrl='https://www.reddit.com/r/food/top.json';

   }

   getNews(company, limit){
    return this._http.get(this.baseUrl+ '/' +company+'/top.json?limit='+limit)
    .map (res => res.json());

   }

}
