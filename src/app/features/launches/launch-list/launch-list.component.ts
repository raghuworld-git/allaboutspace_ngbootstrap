import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { LaunchList } from '../../../shared/models/launches/launch-list.model';
import { EmptyTextPipe } from '../../../utilities/pipes/empty-text.pipe';
import { StatusColorService } from '../../../utilities/service/status-color.service';

@Component({
  selector: 'app-launch-list',
  standalone: true,
  imports: [EmptyTextPipe, RouterLink],
  templateUrl: './launch-list.component.html',
  styleUrl: './launch-list.component.scss',
})
export class LaunchListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private statusColorService: StatusColorService) { }

  private previousLaunchType: string = "previous";
  private upcomingLaunchType: string = "upcoming";

  launchType: string | null = '';

  launchList: LaunchList[] = [
    {
      id: '16b81321-f53c-4323-b79d-528b1c2480d0',
      image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230209220217.png',
      slug: 'falcon-9-block-5-starlink-group-2-7',
      name: 'Falcon 9 Block 5 | Starlink Group 2-7',
      status: {
        id: 3,
        name: 'Launch Successful',
        abbrev: 'Success',
        description:
          'The launch vehicle successfully inserted its payload(s) into the target orbit(s).',
      },
      net: '2023-03-03T18:38:50Z',
      location: 'Vandenberg SFB, CA, USA',
      lsp_name: 'SpaceX',
    },
    {
      id: '45f43220-2e7a-4beb-ac60-6b964d35e24b"',
      image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/qaem_100_image_20240123065309.jpg',
      slug: 'qaem-100-nahid-1',
      name: 'Qaem 100 | Nahid-1',
      status: {
        id: 4,
        name: 'Launch Failure',
        abbrev: 'Failure',
        description:
          'Either the launch vehicle did not reach orbit, or the payload(s) failed to separate.',
      },
      net: '22023-03-04T00:00:00Z',
      location: 'Shahrud Missile Test Site, Islamic Republic of Iran',
      lsp_name: 'Islamic Revolutionary Guard Corps Aerospace Force',
    },
  ];
  ngOnInit(): void {
    this.route.queryParamMap.pipe(map((params: ParamMap) => {
      this.launchType = params.get('type');
      if (this.launchType === null) {
        this.launchType = this.upcomingLaunchType;
      } else if (this.launchType.toLocaleLowerCase() === this.previousLaunchType || this.launchType.toLocaleLowerCase() === this.upcomingLaunchType) {
        this.launchType = this.launchType.toLocaleLowerCase();
      }
    }));
  }

  getStatusColor(status: string) {
    return this.statusColorService.getTableColor(status);
  }
}
