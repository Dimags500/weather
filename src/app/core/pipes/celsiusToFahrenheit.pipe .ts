import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CelsiusToFahrenheit'
})
export class CelsiusToFahrenheitPipe implements PipeTransform {

  transform(temperature: number): number {
    return Math.ceil(temperature *  1.8 )+ 32 
  }

}
