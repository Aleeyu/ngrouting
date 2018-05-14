import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Http } from '@angular/http';
import { ProsService } from '../shared/pros.service';
import 'rxjs/Rx'
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  datas:Observer<any>
  product:any = []
  constructor(private http:Http,private props:ProsService) {
    this.http = http
    // this.datas = this.props.getPro()
    // this.datas = this.http.post('https://esdev.51s.co/api/v1/open/market/goods/search',{
    //   page: 1,
    //   size: 100,
    //   orderBy: [],
    //   queryFilter: [{property: 'isOnShelf', op: '=', value: 0}]
    // }).map((res) => {return res.json().data})
  }

  ngOnInit() {
    this.props.getPro().subscribe(
      (res)=>{
        this.product = res.content
      },
      (err)=>{
        console.log(err)
      },
      ()=>{
        console.log('流结束')
      }
    )
    class Student {
      fullName: string;
      constructor(public firstName, public middleInitial, public lastName) {
          this.fullName = firstName + " " + middleInitial + " " + lastName;
      }
    }

    interface Person {
      firstName: string;
      lastName: string;
    }

    function greeter(person : Person) {
      return "Hello, " + person.firstName + " " + person.lastName;
    }
    //console.log( new Student("Jane", "M.", "User"))
    let user = new Student("Jane", "M.", "User");
    //console.log(greeter(user))
    let ro: ReadonlyArray<number> = [1,2];
    console.log(ro)
    let deck = {
      suits: ["hearts", "spades", "clubs", "diamonds"],
      cards: Array(52),
      createCardPicker: () =>{
          return function() {
              let pickedCard = Math.floor(Math.random() * 52);
              let pickedSuit = Math.floor(pickedCard / 13);

              return {suit: this.suits[pickedSuit], card: pickedCard % 13};
          }
      }
  }

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  console.log(pickedCard.card)
  // alert("card: " + pickedCard.card + " of " + pickedCard.suit);
  }

}
