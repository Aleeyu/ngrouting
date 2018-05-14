import { Component, OnInit,DoCheck,Injector, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit,DoCheck {
  state: string = 'sssssss'
  othserState: string
  oldstate: string = ''
  initstate: string = this.state
  newstate: string = ''
  color = 'yellow';
  toogle=false
  watchlist: Array<string> = []
  showmodelView: boolean=false
  formModel: FormGroup;
  constructor(fb:FormBuilder,private user:UserService) {
    this.formModel=fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      phone:['',[Validators.required]]
    })
  }
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
  ngOnInit() {
    console.log(this.user.user())
  }
  ngDoCheck(){
    this.check(this.initstate, this.state, this.watchlist)
  }
  tooglefun(){
    this.toogle=!this.toogle
  }
  showmodel(){
    this.showmodelView=true
    console.log(this.showmodelView)
  }
  closeview(){
    this.showmodelView=false
  }
  onSubmit(){
    let isValid:boolean= this.formModel.valid;
    // console.log(error)
    //console.log(this.formModel.dirty)
    console.log(isValid)
  }
  send(){
    let isValid:boolean= this.formModel.valid;
    if (isValid) {
      this.showmodelView = true
      console.log(this.formModel.value)
    } else {
      console.log(this.formModel)
    }
  }
  check(initValue, watchString, watchList){
    let oldv = ''
    let newV = ''
    if (initValue !== watchString) {
      watchList.push(watchString)
      oldv = watchList[watchList.length -2] || ''
      newV = watchList[watchList.length-1]
      console.log('old' + oldv)
      console.log('new' + newV)
    }
  }
}
