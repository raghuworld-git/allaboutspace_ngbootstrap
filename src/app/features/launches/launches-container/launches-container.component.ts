import { Component, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-launches-container',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './launches-container.component.html',
  styleUrl: './launches-container.component.scss',
})
export class LaunchesContainerComponent implements OnInit {
  constructor(

  ) { }


  ngOnInit(): void {

  }


}
