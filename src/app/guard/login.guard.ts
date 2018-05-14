import { CanActivate }   from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    var n = Math.random()
    var b = false;
    if(n>0.5) {
      b=true
      // alert('登录了')
    }else {
      b=false
      // alert('你没有登录')
    }
    // 这里判断登录状态, 返回 true 或 false
    return true;
  }
}
