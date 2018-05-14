import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notlogin',
  templateUrl: './notlogin.component.html',
  styleUrls: ['./notlogin.component.css']
})
export class NotloginComponent implements OnInit {
  disabled: Boolean
  inputvalue: String = 'asdasdas'
  mycalss:String = 'red'
  vl:String
  d:Date= new Date()
  pi:number = 3.14159;
  e: number = 2.718281828459045;
  a:number = 8.2515
  pie:number = 8
b:number = 156.548
rmb:number = 1546.5481231
  constructor() {

  }

  ngOnInit() {
    this.disabled = false
    this.vl='双向绑定'
  }
  input(e){
    // console.log(e.target.value)
    // console.log(e.target.getAttribute('value'))
    // console.log(this.inputvalue)
    // this.inputvalue = e.target.value
    console.log(this.inputvalue)
  }
  changea(e){
   this.disabled = !this.disabled
   this.mycalss='blue'
   console.log(this.disabled)
  }
}
