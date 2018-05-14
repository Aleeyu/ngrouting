import { FormControl} from '@angular/forms';
export function validphone(control:FormControl):any{
  var myreq = /^[0-9]{4}$/;
  let valid = myreq.test(control.value)
  console.log('num校验结果是'+ valid)
  if (valid) {
    // return 表示通过校验
    return null
  } else {
    if (control.value) {
      return {
        phone:true
      }
    } else {
      return {
        required:true
      }
    }
  }
}
export function validuser(control:FormControl):any{
  var myreq = /^[0-9]{4}$/;
  let valid = myreq.test(control.value)
  console.log('num校验结果是'+ valid)
  if (valid) {
    // return 表示通过校验
    return null
  } else {
    if (control.value) {
      return {
        phone:true
      }
    } else {
      return {
        required:true
      }
    }
  }
}
