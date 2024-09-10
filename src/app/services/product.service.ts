import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private SERVER_URL='http://localhost:3000/api';
  constructor(private http:HttpClient) {}
  show(){
console.log("waaa");
  }

  //get all products from backend
getAllproduct(numberofresult=10){
  return  this.http.get(this.SERVER_URL +'/products',{
    params:
      {
limit:numberofresult.toString()
      }
  });
}

//get one product
  getProductbyId(id:number){
    return this.http.get(this.SERVER_URL +'/product'+ id);
  }

  //get all products from one gategory

getproductsfromcategory(cat_name:string){
    return this.http.get(this.SERVER_URL + '/product/gategory' +cat_name);
}
}
