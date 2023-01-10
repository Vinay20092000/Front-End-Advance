import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent {

 amount:number|any="";
 rate:number|any ="";
 period:number|any="";
 si :number|any ="";
 total : number|any="";
 
 
 public calculate_click():void
 {
  this.si =(this.amount*this.rate*this.period)/100;
  this.total = (this.si+this.amount);
 } 
}
