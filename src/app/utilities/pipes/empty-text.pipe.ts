import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyText',
  standalone: true
})
export class EmptyTextPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (value === null || value === undefined || value.trim() === '') {
      return 'Not available';
    }
    else {
      return value;
    }
  }

}
