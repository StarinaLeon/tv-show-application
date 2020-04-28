import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  public readonly PAGE_SIZE_OPTIONS = [10, 20, 30];
  @Input() rowsCount: number;
  @Input() currentPage: number;
  @Input() itemsPerPage: number;
  @Output() onGoToPage = new EventEmitter();
  @Output() itemsPerPageChanged = new EventEmitter();
  public totalPagesCount

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes): void {
      this.totalPagesCount = Math.ceil(this.rowsCount / this.itemsPerPage);
  }

  nextPage() {
    this.onGoToPage.emit(this.currentPage++)
  }

  previousPage() {
    this.onGoToPage.emit(this.currentPage--)
  }

  changePageSize(itemsPerPage) {
    this.itemsPerPageChanged.emit(itemsPerPage)
  }

  selectPage(page: number) {
    this.onGoToPage.emit(page)
  }
}
