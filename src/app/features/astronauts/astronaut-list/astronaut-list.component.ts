import { Component } from '@angular/core';
import { CommonLayoutWithProjectionsComponent } from '../../../shared/components/common-layout-with-projections/common-layout-with-projections.component';
import { QuickLinksComponent } from '../../../shared/components/quick-links/quick-links.component';

@Component({
  selector: 'app-astronaut-list',
  standalone: true,
  imports: [CommonLayoutWithProjectionsComponent, QuickLinksComponent],
  templateUrl: './astronaut-list.component.html',
  styleUrl: './astronaut-list.component.scss',
})
export class AstronautListComponent {}
