import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  @Input()
  other:string
  constructor() { }

  ngOnInit() {
    //this.other='来自other组件'
  }

}
