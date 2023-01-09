import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jsemployee',
  templateUrl: './jsemployee.component.html',
  styleUrls: ['./jsemployee.component.css']
})
export class JsemployeeComponent {

  name:string="";
  city:string="";
  email:string="";
  age:number|any="";
  employeeId:number=0;

  public empsArray:any[]=[];

  constructor (private httpObj:HttpClient){}

  getData_click():void
  {
    let url:string="http://localhost:3000/employees";
    this.httpObj.get(url).subscribe((response:any) =>
    {
      this.empsArray=response;
    });
  }

  postData_click():void
  {
    let url:string="http://localhost:3000/employees";

    let employeeObj:any={};
    
    employeeObj.name=this.name;
    employeeObj.city=this.city;
    employeeObj.email=this.email;
    employeeObj.age=this.age;
    employeeObj.employeeId=this.employeeId;

   this.httpObj.post(url,employeeObj).subscribe((response:any)=>
   {this.getData_click();}
   );
  }
}
