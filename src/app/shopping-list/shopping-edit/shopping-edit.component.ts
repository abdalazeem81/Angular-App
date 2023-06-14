import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('InputNameRef', {static: false}) InputNameRef: ElementRef;
@ViewChild('InputAmountRef', {static: false}) InputAmountRef: ElementRef;
@Output() IngredientAdded = new EventEmitter<Ingredient>();
  AddIngredient() {
    const Name = this.InputNameRef.nativeElement.value;
    const Amount = this.InputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(Name, Amount);
    this.InputNameRef.nativeElement.value = '';
    this.InputAmountRef.nativeElement.value = '';
    this.IngredientAdded.emit(newIngredient);
  }
  // address: string = "";
  // token: string = "";
  // date: Date = new Date();
  // constructor(private http: HttpClient){
  // }
//   public GetToken(){
//     this.address = "http://176.57.189.118:8080/api/Users/Login?UserName=abdo&Pasword=adbo1234";
//     this.http.get(this.address).subscribe(
//       (data) => {                           //next() callback
//         console.log('response received');
//         console.log(this.date);

//         this.token = data['result']['token'];
//       },
//       (error) => {                              //error() callback
//         console.error('Request failed with error')
//       }
      
//     );
// }
}
