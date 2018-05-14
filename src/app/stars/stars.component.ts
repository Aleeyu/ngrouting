import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  public stars: Array<number>
  @Input()
  private num:number=0
  constructor() {
  }

  ngOnInit() {
    this.stars = []
    for (var i=0;i< this.num ;i++) {
      this.stars.push(i)
    }
  }

}
