import { Component, OnInit } from '@angular/core';
import { CommonLayoutWithProjectionsComponent } from '../../../../shared/components/common-layout-with-projections/common-layout-with-projections.component';
import { QuickLinksComponent } from '../../../../shared/components/quick-links/quick-links.component';
import { StatusColorService } from '../../../../utilities/service/status-color.service';
import { LaunchesService } from '../../launches.service';
import { Observable, map } from 'rxjs';
import { CommonResponse } from '../../../../shared/models/common-response.model';
import { LaunchList } from '../../../../shared/models/launches/launch-list.model';
import { CardLoadingPlaceholderLargeComponent } from '../../../../shared/components/card-loader/card-loading-placeholder-large/card-loading-placeholder-large.component';
import { CardLoadingPlaceholderSmallComponent } from '../../../../shared/components/card-loader/card-loading-placeholder-small/card-loading-placeholder-small.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { iconoirPin, iconoirAlarm, iconoirArrowRight } from '@ng-icons/iconoir';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { FloatingMenuComponent } from '../../../../shared/components/floating-menu/floating-menu.component';

@Component({
  selector: 'app-previous',
  standalone: true,
  imports: [
    CommonLayoutWithProjectionsComponent,
    QuickLinksComponent,
    CardLoadingPlaceholderLargeComponent,
    CardLoadingPlaceholderSmallComponent,
    FloatingMenuComponent,
    PaginationComponent,
    NgIconComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule,    
  ],
  providers: [
    provideIcons({
      iconoirPin,
      iconoirAlarm,
      iconoirArrowRight,
    }),
  ],
  templateUrl: './previous.component.html',
  styleUrl: './previous.component.scss',
})
export class PreviousComponent implements OnInit {
  constructor(
    private statusColorService: StatusColorService,
    private launchService: LaunchesService
  ) {}

  launchList$!: Observable<CommonResponse<LaunchList>>;
  launchType: string | null | undefined = '';
  totalItemCount: number = 0;
  disablePagination: boolean = false;
  pageLimit = 5;

  ngOnInit(): void {
    this.getPastLaunchesList(this.pageLimit, 0);
  }

  getPastLaunchesList(limit: number, offset: number) {
    this.disablePagination = true;
    this.launchList$ = this.launchService
      .getPastLaunchesList(limit, offset)
      .pipe(
        map((data) => {
          this.totalItemCount = data.count;
          this.disablePagination = false;
          return data;
        })
      );
  }

  getStatusColor(status: string) {
    return this.statusColorService.getStatusColor(status);
  }

  onPageChangeEvent(currentPage: number) {
    let offset: number = (currentPage - 1) * this.pageLimit;
    this.getPastLaunchesList(this.pageLimit, offset);
  }
}
