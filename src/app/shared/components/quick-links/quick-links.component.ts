import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { iconoirLink } from '@ng-icons/iconoir';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  providers: [
    provideIcons({
      iconoirLink,
    }),
  ],
  templateUrl: './quick-links.component.html',
  styleUrl: './quick-links.component.scss',
})
export class QuickLinksComponent {
  @Input() disableUpcoming: boolean = false;
  @Input() disablePrevious: boolean = false;
  @Input() disableAstronauts: boolean = false;
  @Input() disableAgencies: boolean = false;
  @Input() disableNews: boolean = false;
}
