import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/root.reducers';
import {Observable} from 'rxjs';
import {ShowInterface} from '../../../shared/interfaces/show.interface'
import {getShows} from '../../../store/shows/selectors';
import {SelectGenre} from '../../../store/shows/actions';

@Component({
  selector: 'app-data-table-container',
  template: '<app-data-table [shows]="shows$ | async" (genreSelected)="onChangeSelectedGenre($event)"></app-data-table>'
})

export class DataTableContainer {
  shows$: Observable<ShowInterface[]>

  constructor(private store: Store<AppState>) {
    this.shows$ = this.store.select(getShows)
  }

  onChangeSelectedGenre(genre) {
    this.store.dispatch(new SelectGenre(genre))
  }
}
