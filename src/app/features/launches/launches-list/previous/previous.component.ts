import { Component } from '@angular/core';
import { CommonLayoutWithProjectionsComponent } from '../../../../shared/components/common-layout-with-projections/common-layout-with-projections.component';
import { QuickLinksComponent } from '../../../../shared/components/quick-links/quick-links.component';

@Component({
  selector: 'app-previous',
  standalone: true,
  imports: [CommonLayoutWithProjectionsComponent, QuickLinksComponent],
  templateUrl: './previous.component.html',
  styleUrl: './previous.component.scss',
})
export class PreviousComponent {}
