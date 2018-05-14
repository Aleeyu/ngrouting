import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Product,ProductService } from '../shared/product.service';
import { ProductService2 } from '../shared/product2.service';
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // providers:[{
  //   provide: ProductService,useClass:ProductService2
  // }]
})
export class Product2Component implements OnInit {

  products: Array<Product>;
  constructor(private router:Router,private routeinfo:ActivatedRoute,private productService:ProductService) {

   }

  ngOnInit() {
    this.products = this.productService.getPro()

    console.log(this.products)
  }
  todetail = ()=>{
    this.router.navigate(['/home/detail', 123123])
  }
}
