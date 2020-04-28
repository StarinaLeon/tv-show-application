import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/root.reducers';
import {Observable} from 'rxjs';
import {ShowInterface} from '../../../shared/interfaces/show.interface'
import {getCurrentPageShows, getSelectedGenre, getShows} from '../../../store/shows/selectors';
import {ChangeSorting, SelectGenre} from '../../../store/shows/actions';

@Component({
  selector: 'app-data-table-container',
  template: '<app-data-table  [shows]="shows$ | async" (genreSelected)="onChangeSelectedGenre($event)" (sortChange)="onSortChange($event)"></app-data-table>'
})

export class DataTableContainer {


  shows$: Observable<ShowInterface[]>

  constructor(private store: Store<AppState>) {
    this.shows$ = this.store.select(getCurrentPageShows);
  }

  onChangeSelectedGenre(genre) {
    this.store.dispatch(new SelectGenre(genre))
  }

  onSortChange(sorting) {
    this.store.dispatch(new ChangeSorting(sorting))
  }
}
