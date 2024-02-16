import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink, RouterLinkActive } from '@angular/router';
import { LaunchList } from '../../../shared/models/launches/launch-list.model';
import { EmptyTextPipe } from '../../../utilities/pipes/empty-text.pipe';
import { StatusColorService } from '../../../utilities/service/status-color.service';
import { LaunchesService } from '../launches.service';
import { CommonResponse } from '../../../shared/models/common-response.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-launch-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgbPaginationModule, EmptyTextPipe],
  templateUrl: './launch-list.component.html',
  styleUrl: './launch-list.component.scss',
})
export class LaunchListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private statusColorService: StatusColorService,
    private launchService: LaunchesService
  ) { }


  private previousLaunchType: string = 'past';

  launchType: string | null = '';
  page = 1;

  launchList$!: Observable<CommonResponse<LaunchList>>;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.launchType = params.get("type");
      if (this.launchType !== null && this.launchType!.toLocaleLowerCase() === this.previousLaunchType) {
        this.getPastLaunchesList(8, 10);
      }
      else {
        this.getUpcomingLaunchesList(8, 10);
      }
    });

  }

  getUpcomingLaunchesList(limit: number, offset: number) {
    this.launchList$ = this.launchService.getUpcomingLaunchesList(limit, offset);
  }

  getPastLaunchesList(limit: number, offset: number) {
    this.launchList$ = this.launchService.getPastLaunchesList(limit, offset);
  }

  getStatusColor(status: string) {
    return this.statusColorService.getStatusColor(status);
  }
}
