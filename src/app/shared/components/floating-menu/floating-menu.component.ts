import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { iconoirLink } from '@ng-icons/iconoir';

@Component({
  selector: 'app-floating-menu',
  standalone: true,
  imports: [NgIconComponent, NgbDropdownModule, RouterLink],
  providers: [provideIcons({ iconoirLink })],
  templateUrl: './floating-menu.component.html',
  styleUrl: './floating-menu.component.scss',
})
export class FloatingMenuComponent {
  @Input() disableUpcoming: boolean = false;
  @Input() disablePrevious: boolean = false;
  @Input() disableAstronauts: boolean = false;
  @Input() disableAgencies: boolean = false;
  @Input() disableNews: boolean = false;
}
