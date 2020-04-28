import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/root.reducers';
import {Observable} from 'rxjs';
import {getCurrentPage, getItemsPerPage, getShowsLength} from '../../../store/shows/selectors';
import {ChangeCurrentPage, ChangeItemsPerPage} from '../../../store/shows/actions';

@Component({
  selector: 'app-paginator-container',
  template: `<app-paginator [rowsCount]="rowsCount$ | async"
                            [currentPage]="currentPage$ |async"
                            [itemsPerPage]="itemsPerPage$ | async"
                            (itemsPerPageChanged)="changePageSize($event)"
                            (onGoToPage)="selectPage($event)"
                            ></app-paginator>`
})

export class PaginatorContainer {
  public rowsCount$: Observable<number>;
  public currentPage$: Observable<number>;
  public itemsPerPage$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.rowsCount$ = this.store.select(getShowsLength)
    this.currentPage$ = this.store.select(getCurrentPage);
    this.itemsPerPage$ =this.store.select(getItemsPerPage);
  }

  changePageSize(event) {
    this.store.dispatch(new ChangeItemsPerPage(event))
  }

  selectPage(event) {
    this.store.dispatch(new ChangeCurrentPage(event))
  }
}
