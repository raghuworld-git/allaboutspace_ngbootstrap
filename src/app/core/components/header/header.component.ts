import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DateTimeUtilityService } from '../../../utilities/service/datetime-utility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private dateTimeUtilityService: DateTimeUtilityService){}

  getBrowserTimeZone():string{
    return this.dateTimeUtilityService.getBrowserTimeZone();
  }
}
