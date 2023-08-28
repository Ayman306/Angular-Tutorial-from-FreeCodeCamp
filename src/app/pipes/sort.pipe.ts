import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: number[], ...args: number[]): unknown {
    return value.sort((a,b)=>a -b)}

}
