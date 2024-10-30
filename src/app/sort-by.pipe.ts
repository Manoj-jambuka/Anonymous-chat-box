import { Pipe, PipeTransform } from '@angular/core';
import { chatItem } from './model/chat-item';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Array<chatItem>, criteria:string){
    console.log('Helloo Sort Pipe');
    if (!value || !criteria)
      return value;
    let sortbyAsc:boolean=true;
    let p: string = criteria;

    let sortFn:(a: chatItem, b: chatItem) =>number = (a, b) => {
      let value: number = 0;
      if (a.time === undefined) value = -1;
      else if (b.time === undefined) value = 1;
      else value = a.time > b.time? 1 : (b.time > a.time ? -1 : 0);
      return sortbyAsc ? (value * -1) : value;    
    };

    value.sort(sortFn);
    return value;
  }

}