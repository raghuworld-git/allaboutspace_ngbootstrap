import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusColorService {

  constructor() { }

  getTableColor(status: string): string {
    let statusColor: string = '';
    switch (status.toLocaleLowerCase()) {
      case "In Flight".toLocaleLowerCase():
        statusColor = 'warning';
        break;
      case "TBC".toLocaleLowerCase():
      case "TBD".toLocaleLowerCase():
        statusColor = 'info';
        break;
      case "Go".toLocaleLowerCase():
      case "Success".toLocaleLowerCase():
        statusColor = 'success';
        break;
      case "Hold".toLocaleLowerCase():
        statusColor = 'secondary';
        break;
      case "Failure".toLocaleLowerCase():
      case "Partial Failure".toLocaleLowerCase():
        statusColor = 'danger';
        break;
      default:
        break;
    }
    return statusColor;
  }
}
