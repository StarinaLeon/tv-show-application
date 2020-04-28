import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/root.reducers';
import {Observable} from 'rxjs';
import {getGenres, getSelectedGenre, getYears} from '../../../store/shows/selectors';
import {ChangeSearchQuery, LoadGenres, LoadYears, SelectGenre, SelectYear} from '../../../store/shows/actions';

@Component({
  selector: 'app-filter-container',
  template: `<app-filter (changeSelectedQuery)="changeSelectedQuery($event)"
                         (changeSelectedGenre) = "changeSelectedGenre($event)"
                         (changeSelectedYear) = "changeSelectedYear($event)"
                         [years]="years$ | async" [genres]="genres$ | async"
                         [selectedGenre] = "selectedGenre$ | async"
  ></app-filter>`
})

export class FilterContainer {
  public years$: Observable<string[]>;
  public genres$: Observable<string[]>;
  public selectedGenre$ : Observable<string>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadGenres());
    this.store.dispatch(new LoadYears());
    this.years$ = this.store.select(getYears);
    this.genres$ = this.store.select(getGenres);
    this.selectedGenre$ = this.store.select(getSelectedGenre);
  }

  changeSelectedQuery(query: string) {
    this.store.dispatch(new ChangeSearchQuery(query))
  }

  changeSelectedGenre(genre: string) {
    this.store.dispatch(new SelectGenre(genre))
  }

  changeSelectedYear(year: string) {
    this.store.dispatch(new SelectYear(year))
  }
}
