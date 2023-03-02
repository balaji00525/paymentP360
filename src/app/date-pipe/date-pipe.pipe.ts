import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',

})
export class DateFormatPipe implements PipeTransform {
datepipe=DatePipe;
  transform(value: unknown, ...args: unknown[]): void {
    // this.myDate= this.datepipe.transform(value, 'MMMM d');
    // return (this.myDate?.split(" ")[0]) + ' ' + util.getDate(this.myDate?.split(" ")[1]);
  }

}
