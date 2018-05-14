import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  state:string='asda'
  constructor() {
    console.log('构造器函数，一般用于注入服务')
  }
  ngOnChanges() {
    //有输入属性时出发，改变了再次出发
    console.log('检测到输入数据变化，首次触发发生在ngOnInit前。注意对象的属性发生变化时监听不到')
  }
  ngOnInit() {
    this.state='asdasdasdas'
    console.log('组件初始化，通常会设置一些初始值')
  }
  ngDoCheck() {
    console.log('手动触发更新检查')
  }
  ngAfterContentInit() {
    console.log('内容初始化到组件之后')
  }
  ngAfterContentChecked() {
    console.log('内容变更检测之后')
  }
  ngAfterViewInit() {
    console.log('视图 初始化之后')
  }
  ngAfterViewChecked() {
    console.log('视图发生变化检测之后，这个可以用来保证用户视图的及时更新')
  }
  ngOnDestroy() {
    console.log('组件注销时的清理工作，通常用于移除事件监听，退订可观察对象等')
  }
  change(){
    this.state = '111111111111'
  }
}
