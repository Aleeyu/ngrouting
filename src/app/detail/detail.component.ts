import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Comment,CommentsService } from '../shared/comments.service';
import {Comment, Product,ProductService } from '../shared/product.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private id:Id
  private products:Array<Product>
  private productDetail:Product
  private comments:Array<Comment>
  constructor(private productService:ProductService,private routeinfo:ActivatedRoute) { }

  ngOnInit() {
    this.routeinfo.params.subscribe((params: Params)=>{
      this.id =params["id"]
      this.products = this.productService.getPro()
      this.productDetail = this.productService.getProDetail(this.id)
      this.comments=this.productService.getComments(this.id)
    })
    // this.id = this.routeinfo.snapshot.params.id
  }

}

export class Id {
  constructor(public id:number) { }
}
