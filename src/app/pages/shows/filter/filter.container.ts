import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/root.reducers';
import {Observable} from 'rxjs';
import {getGenres, getYears} from '../../../store/shows/selectors';
import {LoadGenres, LoadYears} from '../../../store/shows/actions';

@Component({
  selector: 'app-filer-container',
  template: '<app-filter [years]="years$ | async" [genres]="genres$ | async"></app-filter>'
})

export class FilterContainer {
  public years$: Observable<string[]>
  public genres$: Observable<string[]>
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadGenres())
    this.store.dispatch(new LoadYears())
    this.years$ = this.store.select(getYears)
    this.genres$ = this.store.select(getGenres)
  }
}
