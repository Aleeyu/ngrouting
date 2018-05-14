import { Component, OnInit, Input, EventEmitter, Output,OnChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {
  @Input()
  info:string
  @Input()
  childinfo:string='这是子组件的值'
  @Input()
  isobj:{name:string}
  oldname:string
  @Output('clildinfo')
  emitinfo:EventEmitter<string>=new EventEmitter()
  @Output()
  buy:EventEmitter<string>=new EventEmitter()
  constructor() { }
  ngOnChanges(e){
    console.log('属性变化触发ngOnChanges')
    //e包含的输入属性的信息，当前值，上一次的值，是否首次调用
    console.log(e)
  }
  ngOnInit() {

  }
  send(){
    this.emitinfo.emit(this.childinfo)
  }
  fromhome(d:string){
    console.log('父组件调用了子组件的方法传入的值是'+ d)
  }
  ngDoCheck(){
    if(this.isobj.name != this.oldname){

      console.log('不可变的对象被改变触发了docheck，但是不出发onchange')
      this.oldname=this.isobj.name
    }
    console.log('点击等事件也会出发docheck')
  }
  senddfun(e){
    this.buy.emit('来自child组件')
  }
}
