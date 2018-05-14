import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service'
@Injectable()
export class CommentsService {

  constructor(public loggerService:LoggerService) { }
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
export class Comment {
  constructor(
    public id:number,
    public comment:string
  ){

  }
}
