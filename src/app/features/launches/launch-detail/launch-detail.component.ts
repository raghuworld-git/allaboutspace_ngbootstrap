import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-launch-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './launch-detail.component.html',
  styleUrl: './launch-detail.component.scss',
})
export class LaunchDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  slug: string | null = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug');
    });
  }
}
