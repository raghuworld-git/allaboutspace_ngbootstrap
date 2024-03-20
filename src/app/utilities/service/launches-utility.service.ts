interface iconsColorModel {
  iconName: string;
  color: string;
}
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { launchStatusStaticData } from '../static-data/launch-data.data';

@Injectable({ providedIn: 'root' })
export class LaunchesUtilityService {
  constructor() {}

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
      case 'Success'.toLocaleLowerCase():
        statusColor = 'success';
        break;
      case 'TBC'.toLocaleLowerCase():
      case 'TBD'.toLocaleLowerCase():
        statusColor = 'info';
        break;
      case 'Hold'.toLocaleLowerCase():
        statusColor = 'warning';
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

  getlaunchYearsFromStart(): number[] {
    const range = (start: number, stop: number, step: number) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      );
    let firstLaunchYear: number = environment.LAUNCH_START_YEAR;
    let currentYear = new Date().getFullYear();
    return range(currentYear, firstLaunchYear, -1);
  }

  getLaunchStatusListForDrownDown() {
    return [...launchStatusStaticData];
  }

  getAgencyListForDropdown() {}
}
