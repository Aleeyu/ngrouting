import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  user (){
    return{
      id:1111,
      name:'asdasda'
    }
  }
}
