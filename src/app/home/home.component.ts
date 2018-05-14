import { Component, OnInit,OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {
  info:string
  childinfo:string='接收子组件的值'
  other:string
  isobj:{name:string}={name:'liyu'}
  @ViewChild("child1")
  child1
  constructor() { }
  ngOnChanges(){
    console.log('属性变化触发ngOnChanges')
  }
  aginchange(){
    this.isobj={name:'xuyao'}
  }
  ngOnInit():void {
    this.info='asdsa'
    this.child1.fromhome('hahaha')
  }
  getchildinfo(e){
    this.childinfo = e
  }
  usechildfun(e){
    console.log(e)
  }
  fromchild(e){
this.other=e
  }
}
