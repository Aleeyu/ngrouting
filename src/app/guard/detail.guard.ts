import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,Router }   from '@angular/router';
import {Id} from '../detail/detail.component'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DetailGuard implements Resolve<Id>{
  constructor(private router:Router){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Id> | Promise<Id> | Id {
    let id:number = route.params["id"];
    console.log(id)
    if(id){
      return new Id(1);
    }else {
      alert('id不纯在')
      // 拿不到想要的就跳转到错误页或者显示loading
      // this.router.navigate(['/home/notlogin']);
    }
  }
}
