import { Component, OnInit } from '@angular/core';
import { LaunchesUtilityService } from '../../../../utilities/service/launches-utility.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { iconoirInfoCircle } from '@ng-icons/iconoir';
import {
  NgMultiSelectDropDownModule,
  IDropdownSettings,
} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [NgMultiSelectDropDownModule],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
  providers: [
    provideIcons({
      iconoirInfoCircle,
    }),
  ],
})
export class SearchFiltersComponent implements OnInit {
  firstOflaunchYear: number;
  listOflaunchStatus: { id: number; name: string }[];
  dropdownSettings: IDropdownSettings = {};

  private listofAllLaunchyears: number[];

  constructor(private launchesUtilityService: LaunchesUtilityService) {
    this.listofAllLaunchyears =
      this.launchesUtilityService.getlaunchYearsFromStart();
    this.firstOflaunchYear =
      this.listofAllLaunchyears[this.listofAllLaunchyears.length - 1];
    this.listOflaunchStatus =
      this.launchesUtilityService.getLaunchStatusListForDrownDown();
  }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
    };
  }

  getlaunchesYearRange(): number[] {
    return this.listofAllLaunchyears;
  }
}
