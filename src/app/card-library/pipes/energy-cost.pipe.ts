import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'energyCost'
})
export class EnergyCostPipe implements PipeTransform {

  transform(value: Array<string>, ...args: unknown[]): string {
    let returnedValue = '';
    value.forEach(item => {
      returnedValue = returnedValue +
        '<span class="energy-icon ' + item +
        '" title="' + item + '"></span>';
    });
    return returnedValue;
  }

}
