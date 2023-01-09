import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array:any[]=[
    {title : "Microsoft Azure Training", url : "https://azure.microsoft.com/en-in/free/search/?OCID=AIDcmmf1elj9v5_SEM_8d6cbffbd59217ee1d04dc5904e2504a:G:s&ef_id=8d6cbffbd59217ee1d04dc5904e2504a:G:s&msclkid=8d6cbffbd59217ee1d04dc5904e2504a", date : "January 8,2023", format : "Online", Time : "11:00 AM IST"}, 
    {title : "AWS Management Console Training", url : "https://aws.amazon.com/console/",  date : "January 9,2023-January 19,2023", format : "Online", Time : "11:00 AM IST"}, 
    {title : "Bootstrap Training", url : "https://getbootstrap.com/", date : "January 10,2023", format : "Online", Time : "11:00 AM IST"}
  ]

}
