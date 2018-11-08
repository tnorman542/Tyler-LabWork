import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stuff'
})
export class StuffPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
