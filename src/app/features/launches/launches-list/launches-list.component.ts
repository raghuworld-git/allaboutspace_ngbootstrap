import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { LaunchList } from '../../../shared/models/launches/launch-list.model';
import { EmptyTextPipe } from '../../../utilities/pipes/empty-text.pipe';
import { StatusColorService } from '../../../utilities/service/status-color.service';
import { LaunchesService } from '../launches.service';
import { CommonResponse } from '../../../shared/models/common-response.model';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
@Component({
  selector: 'app-launches-list',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive,
    EmptyTextPipe,
    PaginationComponent],
  templateUrl: './launches-list.component.html',
  styleUrl: './launches-list.component.scss'
})
export class LaunchesListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private statusColorService: StatusColorService,
    private launchService: LaunchesService
  ) { }


  launchList$!: Observable<CommonResponse<LaunchList>>;
  totalItemCount: number = 0;
  disablePagination: boolean = false;
  pageLimit = 5;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('launchtype') === 'upcoming') {
        this.getUpcomingLaunchesList(this.pageLimit, 0);
      }
      else {
        this.getPastLaunchesList(this.pageLimit, 0);
      }
    });
  }

  getUpcomingLaunchesList(limit: number, offset: number) {
    this.disablePagination = true;
    this.launchList$ = this.launchService
      .getUpcomingLaunchesList(limit, offset)
      .pipe(
        map((data) => {
          this.totalItemCount = data.count;
          this.disablePagination = false;
          return data;
        })
      );
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
    this.getUpcomingLaunchesList(this.pageLimit, offset);
  }

}
