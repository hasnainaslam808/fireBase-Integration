import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  detail:boolean = false;
  productList: Product[]=[];
  selectedProduct!: Product;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getAllProduct();
 

    
  }
  seeDetails(product: Product){
    // this.detail = !this.detail;
    this.selectedProduct = product;
  }



  getAllProduct(){
    this.data.getAllProduct().subscribe(res =>{
      this.productList = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
console.log(data.length);
        return data;
      })
    }, err =>{
      alert('Error Fetching Dats')
    })
  }



}
