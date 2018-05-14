import { Component, OnInit,Input, EventEmitter, Output,OnChanges } from '@angular/core';

@Component({
  selector: 'app-mudel',
  templateUrl: './mudel.component.html',
  styleUrls: ['./mudel.component.css']
})
export class MudelComponent implements OnInit,OnChanges {
  @Input()
  show:boolean
  @Input()
  title:string
  @Output('close')
  closefun:EventEmitter<boolean>=new EventEmitter()
  @Output('sub')
  submitfun:EventEmitter<boolean>=new EventEmitter()
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(){
console.log(this.show)
  }
  closeview(e:any){
    e.stopPropagation();
    this.closefun.emit(this.show)
  }
  save(e:any){
    e.stopPropagation();
    this.submitfun.emit()
  }
}
