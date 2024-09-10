import {ProductModelServer} from "./product.model";

export interface CarteModel{
  total:number;
  data:[{
    product:ProductModelServer,
    numInCart:number
  }];

}
//local storage :
export interface CarteModelPublic{
  total:number;
  prodData:[{
    id:number,
    inCart:number

  }];

}
