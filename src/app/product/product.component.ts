import { Component, OnInit, Injector } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Product,ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product>;
  constructor(private router:Router,private routeinfo:ActivatedRoute,private productService:ProductService) {

   }
  // private productService:ProductService
  // constructor(private router:Router,private routeinfo:ActivatedRoute,private injector:Injector) {
  //   this.productService= injector.get(ProductService)
  // }
  ngOnInit() {
    this.products = this.productService.getPro()

    console.log(this.products)
  }
  todetail = (item)=>{
    console.log(item.id)
    this.router.navigate(['/home/detail', item.id])
  }
}
