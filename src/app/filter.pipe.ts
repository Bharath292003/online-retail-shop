import { Pipe, PipeTransform } from '@angular/core';
import { ProductData } from './products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:ProductData[],searchtext: string):ProductData[]{
    searchtext=searchtext.toLowerCase();
    return value.filter((val:ProductData)=>{
      return val.ProductName?.toLowerCase().includes(searchtext);
    })
  }

}
