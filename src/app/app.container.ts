import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/root.reducers';
import {LoadShows, LoadYears, LoadGenres} from './store/shows/actions';


@Component({
  selector: 'app-root-container',
  template: '<app-root></app-root>',
})

export class AppContainer  {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadShows())
  }
}
