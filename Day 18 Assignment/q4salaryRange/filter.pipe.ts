import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeFilter'
})
export class FilterPipe implements PipeTransform {

  transform(input:any[],min:number,max:number): any[]
  {
    let output:any[]=[];
    output=input.filter(item=>item.sal>=min && item.sal<=max);
    return output;
  }

}
