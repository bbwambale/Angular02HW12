import { Component } from "@angular/core";
@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
   pageTitle: string ='Product List!';
   messageToEmit:string;
   constructor(){}
   months = ['Jan', 'Feb', 'March', 'April', 'May', 'June'];
   products=[
    {
    "productId":2,
    "productName":"Garden Cart",
    "productCode":"GDN-0023",
    "releaseDate":"March 18, 2016",
    "description":"15 gallon Capacity",
    "price":32.99,
    "starRating":4.2,
    "imageUrl":"https://www.w3schools.com/w3css/img_lights.jpg"
  },
    
  {
    "productId":3,
    "productName":"Mobile Phone",
     "productCode":"MP-0023",
     "releaseDate":"July 1, 2018",
     "description":"528TB memory",
     "price":1000.99,
     "starRating":5,
     "imageUrl":"https://www.w3schools.com/w3css/img_lights.jpg"
  },

  {
    "productId":4,
    "productName":"LapTop",
     "productCode":"LT-0023",
     "releaseDate":"July 1, 2008",
     "description":"528TB memory",
     "price":556.99,
     "starRating":3,
     "imageUrl":"https://www.w3schools.com/w3css/img_lights.jpg"
  }

];

getEmittedValue(value){
 // console.log(value);
  this.messageToEmit = value;
}
}