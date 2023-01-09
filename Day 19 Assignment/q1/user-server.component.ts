import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-server',
  templateUrl: './user-server.component.html',
  styleUrls: ['./user-server.component.css']
})
export class UserServerComponent {
public usersArray:any[]=[];
constructor(private httpObj:HttpClient){}
getData_click():void{
  let url: string ="https://reqres.in/api/users";
  this.httpObj.get(url).subscribe((response:any) =>
  {
    this.usersArray=response.data;
  });
}
}
