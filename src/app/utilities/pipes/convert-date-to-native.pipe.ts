import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDateToNative',
  standalone: true,
})
export class ConvertDateToNativePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    daysLimitToShow: number = 0
  ): string | Date {
    let currentDate = new Date();
    if (value === null || value === undefined || value.trim() === '') {
      return 'Not available';
    } else {
      let dt = new Date(value);      
      let dateDiff = Math.floor(
        (dt.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
      );
      if (daysLimitToShow <= 0) {
        return dt;
      } else if (dateDiff >= daysLimitToShow) {
        return `${dateDiff} days for launch`;
      }

      return dt;
    }
  }
}
