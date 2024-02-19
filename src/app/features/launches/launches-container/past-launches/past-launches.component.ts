import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { LaunchList } from '../../../../shared/models/launches/launch-list.model';
import { EmptyTextPipe } from '../../../../utilities/pipes/empty-text.pipe';
import { StatusColorService } from '../../../../utilities/service/status-color.service';
import { LaunchesService } from '../../launches.service';
import { CommonResponse } from '../../../../shared/models/common-response.model';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-past-launches',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive,
    EmptyTextPipe,
    PaginationComponent],
  templateUrl: './past-launches.component.html',
  styleUrl: './past-launches.component.scss'
})
export class PastLaunchesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private statusColorService: StatusColorService,
    private launchService: LaunchesService
  ) { }

  launchList$!: Observable<CommonResponse<LaunchList>>;
  totalItemCount: number = 0;
  disablePagination: boolean = false;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.getPastLaunchesList(8, 0);
    });
  }

  getPastLaunchesList(limit: number, offset: number) {
    this.totalItemCount = 0;
    this.launchList$ = this.launchService
      .getPastLaunchesList(limit, offset)
      .pipe(
        map((data: { count: number; }) => {
          this.totalItemCount = data.count;
          return data;
        })
      );
  }

  getStatusColor(status: string) {
    return this.statusColorService.getStatusColor(status);
  }

  onPageChangeEvent(currentPage: number) {
    let offset: number = (currentPage - 1) * 8; // 8 is Items per page which is fixed for now
    this.getPastLaunchesList(8, offset);
  }

}
