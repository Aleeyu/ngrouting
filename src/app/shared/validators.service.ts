import { Injectable } from '@angular/core';
import { FormControl} from '@angular/forms';
@Injectable()
export class ValidatorsService {

  constructor() { }
  validphone(control:FormControl):any{
    var myreq = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    let valid = myreq.test(control.value)
    if (valid) {
      // return 表示通过校验
      return null
    } else {
      return {
        not:true
      }
    }
  }
}
