interface iconsColorModel {
  iconName: string;
  color: string;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusColorService {
  constructor() {}

  // getStatusColor(status: string): string {
  //   let statusColor: string = '';
  //   switch (status.toLocaleLowerCase()) {
  //     case "In Flight".toLocaleLowerCase():
  //       statusColor = 'warning';
  //       break;
  //     case "TBC".toLocaleLowerCase():
  //     case "TBD".toLocaleLowerCase():
  //       statusColor = 'info';
  //       break;
  //     case "Go".toLocaleLowerCase():
  //     case "Success".toLocaleLowerCase():
  //       statusColor = 'success';
  //       break;
  //     case "Hold".toLocaleLowerCase():
  //       statusColor = 'secondary';
  //       break;
  //     case "Failure".toLocaleLowerCase():
  //     case "Partial Failure".toLocaleLowerCase():
  //       statusColor = 'danger';
  //       break;
  //     default:
  //       break;
  //   }
  //   return statusColor;
  // }

  getStatusColorforIcon(status: string): iconsColorModel {
    let iconsColorModel!: iconsColorModel;
    let statusColor: string = '';
    switch (status.toLocaleLowerCase()) {
      case 'In Flight'.toLocaleLowerCase():
        iconsColorModel = {
          color: '#ffc107',
          iconName: 'iconoirMoreHorizCircle',
        };
        break;
      case 'TBC'.toLocaleLowerCase():
      case 'TBD'.toLocaleLowerCase():
        iconsColorModel = { color: '#0dcaf0', iconName: 'iconoirInfoCircle' };
        break;
      case 'Go'.toLocaleLowerCase():
      case 'Success'.toLocaleLowerCase():
        iconsColorModel = { color: '#198754', iconName: 'iconoirCheckCircle' };
        break;
      case 'Hold'.toLocaleLowerCase():
        iconsColorModel = {
          color: '#ffc107',
          iconName: 'iconoirWarningCircle',
        };
        break;
      case 'Failure'.toLocaleLowerCase():
      case 'Partial Failure'.toLocaleLowerCase():
        iconsColorModel = { color: '#dc3545', iconName: 'iconoirXmarkCircle' };
        break;
      default:
        break;
    }
    return iconsColorModel;
  }

  getStatusColor(status: string): string {
    let statusColor: string = '';
    switch (status.toLocaleLowerCase()) {
      case 'In Flight'.toLocaleLowerCase():
      case 'Go'.toLocaleLowerCase():
        statusColor = 'warning';
        break;
      case 'TBC'.toLocaleLowerCase():
      case 'TBD'.toLocaleLowerCase():
        statusColor ='info';
        break;
      case 'Success'.toLocaleLowerCase():
        statusColor = 'success';
        break;
      case 'Hold'.toLocaleLowerCase():
        statusColor = 'secondary';
        break;
      case 'Failure'.toLocaleLowerCase():
      case 'Partial Failure'.toLocaleLowerCase():
        statusColor = 'danger';
        break;
      default:
        break;
    }
    return statusColor;
  }
}
