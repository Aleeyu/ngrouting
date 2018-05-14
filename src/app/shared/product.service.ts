import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
@Injectable()
export class ProductService {
  product: Product;
  comment:Comment;
  constructor(public loggerService:LoggerService) { }
  getPro():Array<Product>{
    this.loggerService.log('getPro()被调用')
    let products = [
      new Product(1123123, "商品辩题", "商品秒速", 5, ["类别1", "类别2"]),
      new Product(2, "商品辩题2", "商品秒速2", 1, ["类别1", "类别2"]),
      new Product(3, "商品辩题3", "商品秒速3", 5, ["类别1", "类别2"])
    ]
    return products
  }
  getProDetail(id):Product{
    this.loggerService.log('getProDetail()被调用')
    let product = new Product(1123123, "商品辩题", "商品秒速", 5, ["类别1", "类别2"])
    return product
  }
  getComments(id):Array<Comment>{
    this.loggerService.log('getComments()被调用')
    console.log('拿到商品id'+id)
    let comments = [
      new Comment(1, "评论1"),
      new Comment(2, "评论2"),
      new Comment(3, "评论3")
    ]
    return comments
  }
}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public desc:string,
    public star:number,
    public category:Array<string>
  ){

  }
}
export class Comment {
  constructor(
    public id:number,
    public comment:string
  ){

  }
}
