import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-number',
  templateUrl: './page-number.component.html',
  styleUrls: ['./page-number.component.css']
})
export class PageNumberComponent implements OnInit {
  @Input() pages: number;
  @Input() currentPage: number;
  @Input() pageSizeOptions: Array<number>;
  @Output() toNextPage = new EventEmitter();
  @Output() toPreviousPage = new EventEmitter();
  @Output() onChangePageSize = new EventEmitter();
  @Output() onGoToPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  nextPage() {
    this.toNextPage.emit()
  }

  previousPage() {
    this.toPreviousPage.emit()
  }

  changePageSize() {
    this.onChangePageSize.emit()
  }
}
