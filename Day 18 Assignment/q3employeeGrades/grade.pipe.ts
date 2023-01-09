import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradePipe implements PipeTransform {

  transform(input:string):any[]{
    
    let output:any[]=[];

    if(input=="1")
    output=["Outstanding"];
    if(input=="2")
    output=["Excellent"];
    if(input=="3")
    output=["Good"];
    if(input=="4")
    output=["Average"];

    return output;
  }
  

}
