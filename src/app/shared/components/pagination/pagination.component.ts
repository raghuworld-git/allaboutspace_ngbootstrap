import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() totalItemsCount: number = 0;
  @Input() disablePagination: boolean = false;
  @Output() pageChangeEvent: EventEmitter<number> = new EventEmitter();
  page = 1;

  onPageChange(currentPage: number) {
    this.pageChangeEvent.emit(currentPage);
    this.page = currentPage;
  }
}
