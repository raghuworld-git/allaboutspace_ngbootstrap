import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { LaunchList } from '../../../shared/models/launches/launch-list.model';
import { EmptyTextPipe } from '../../../utilities/pipes/empty-text.pipe';
import { StatusColorService } from '../../../utilities/service/status-color.service';
import { LaunchesService } from '../launches.service';
import { CommonResponse } from '../../../shared/models/common-response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launch-list',
  standalone: true,
  imports: [EmptyTextPipe, RouterLink],
  templateUrl: './launch-list.component.html',
  styleUrl: './launch-list.component.scss',
})
export class LaunchListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private statusColorService: StatusColorService,
    private launchService: LaunchesService
  ) {}

  private previousLaunchType: string = 'previous';
  private upcomingLaunchType: string = 'upcoming';

  launchType: string | null = '';

  launchList$!: Observable<CommonResponse<LaunchList>>;

  ngOnInit(): void {
    this.getLaunchesList(8, 10);
  }

  getLaunchesList(limit: number, offset: number) {
    this.launchList$ = this.launchService.getLaunchesList(limit, offset);
  }

  getStatusColor(status: string) {
    return this.statusColorService.getStatusColor(status);
  }
}
