import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/root.reducers';
import {Observable} from 'rxjs';
import {ShowInterface} from '../../../shared/interfaces/show.interface'
import {getShows} from '../../../store/shows/selectors';

@Component({
  selector: 'app-data-table-container',
  template: '<app-data-table [shows]="shows$ | async"></app-data-table>'
})

export class DataTableContainer {
  shows$: Observable<ShowInterface[]>

  constructor(private store: Store<AppState>) {
    this.shows$ = this.store.select(getShows)
  }
}
