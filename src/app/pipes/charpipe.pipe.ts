import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charpipe'
})
export class CharpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.substr(0,10);
  }

}
