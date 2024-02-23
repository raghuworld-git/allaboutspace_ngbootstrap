import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { LaunchesService } from '../launches.service';
import { Observable } from 'rxjs';
import { LaunchDetail } from '../../../shared/models/launches/launch-detail.model';

@Component({
  selector: 'app-launch-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './launch-detail.component.html',
  styleUrl: './launch-detail.component.scss',
})
export class LaunchDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private launchService: LaunchesService) { }

  id: string | null = '';
  launchDetails$ !: Observable<LaunchDetail>;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.launchDetails$ = this.launchService.getLaunchDetails(this.id!);
    });
  }
}
