import { CanDeactivate }   from '@angular/router';
import {DetailComponent} from '../detail/detail.component'
export class UnsaveGuard implements CanDeactivate<DetailComponent>{
  canDeactivate(component:DetailComponent){
    return window.confirm('离开？')
  }
}
