import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateTimeUtilityService {
  getBrowserTimeZone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}
