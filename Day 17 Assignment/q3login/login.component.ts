import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  uid:string = "";
  pwd:string = "";
  result:string = "";
  count:number = 0;
  isLoginButtonDisabled:boolean=false;
  col:string="";

  public Login_click():void
  {
    if(this.uid=="admin" && this.pwd=="admin123")
    {
      this.result = "Welcome..";
      this.col="green";
    }
    else
    {
      this.result = "Invalid Credentials.";
      this.col="red";
      this.count++;
      if(this.count==3)
      {
        this.isLoginButtonDisabled=true;
        this.result="You have reached the maximum limit."
        this.col="gray";
      }
    }
  }
}
