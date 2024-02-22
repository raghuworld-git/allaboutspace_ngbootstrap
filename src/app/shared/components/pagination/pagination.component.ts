import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class PaginationComponent {
  @Input() totalItemsCount: number = 0;
  @Input() disablePagination: boolean = false;
  @Input() pageSize: number = 0;
  @Output() pageChangeEvent: EventEmitter<number> = new EventEmitter();
  page = 1;

  onPageChange(currentPage: number) {
    this.pageChangeEvent.emit(currentPage);
    this.page = currentPage;
  }
}
