import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {  
 // private _url: string = "http://hobby-hkdeobeejildgbkeanekfhol.dbs.graphenedb.com:24789/db/data/transaction/commit"
  private _url: string = "http://localhost:7474/db/data/node/51"
 private _timeurl: string = "http://date.jsontest.com/"
 private _apigee: string = "https://apigee.com/platform/zygo/proxies/CJD_Employees-API/develop/1"
 

  
  
   constructor(private _http: Http) {}
  getSkills(){
    return this._http.get(this._url)
      .map((response:Response) => response.json());
  }

  getCurrentTime(){
    return this._http.get(this._timeurl)
      .map(res => res.json());


  }
}

