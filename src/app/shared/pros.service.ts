import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {Observable} from 'rxjs/Rx';
import { Http } from '@angular/http';
// import { Observer } from 'rxjs';
// import { IfObservable } from 'rxjs/observable/IfObservable';
@Injectable()
export class ProsService {
  constructor(public loggerService:LoggerService,private http:Http) { }
  getPro():Observable<any>{
    this.loggerService.log('getPro()被调用')
    return this.http.post('https://esdev.51s.co/api/v1/open/market/goods/search',{
      page: 1,
      size: 100,
      orderBy: [],
      queryFilter: [{property: 'isOnShelf', op: '=', value: 0}]
    }).map((res) => {return res.json().data})
  }
  getProDetail(id):any{
    this.loggerService.log('getProDetail()被调用')

  }
}
