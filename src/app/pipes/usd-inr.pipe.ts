import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr',
  pure: true,

})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price , somthing]=args
    return value*price+somthing;
  }

}
//diffrence in the DOM on using pipe
