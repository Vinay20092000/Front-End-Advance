import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  empsArray:any[]    =  [
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 20} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 30} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 40} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 50} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 60} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 70} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 80} ,
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 90}
  ];


  constructor() {
      console.log("AppComponent constructor is executed");
  }

}
