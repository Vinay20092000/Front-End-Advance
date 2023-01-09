import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-demo',
  templateUrl: './grade-demo.component.html',
  styleUrls: ['./grade-demo.component.css']
})
export class GradeDemoComponent {
  public user:any[]=
  [
    {no:"1",name:"SCOTT",pgrade:"1"},
    {no:"2",name:"ABRONS",pgrade:"2"},
    {no:"3",name:"SMITH",pgrade:"3"},
    {no:"4",name:"JAMES",pgrade:"4"},
    {no:"5",name:"ADAM",pgrade:"1"},
    {no:"6",name:"SATHYA",pgrade:"3"},
    {no:"7",name:"MANEESH",pgrade:"4"},
    {no:"8",name:"HANEESH",pgrade:"2"},
  ]
}
