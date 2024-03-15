import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { iconoirMoreVert } from '@ng-icons/iconoir';

@Component({
  selector: 'app-floating-menu',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ iconoirMoreVert })],
  templateUrl: './floating-menu.component.html',
  styleUrl: './floating-menu.component.scss',
})
export class FloatingMenuComponent {}
