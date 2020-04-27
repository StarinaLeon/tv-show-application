import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {HttpService} from '../../shared/services/http.service';
import {Observable} from 'rxjs';
import {SHOWS_ACTION_TYPES} from './actions';
import {map, mergeMap} from 'rxjs/operators';


@Injectable()
export class ShowsEffects {
  constructor(private actions$: Actions,
              private httpService: HttpService) {
  }

  @Effect()
  loadShows$: Observable<Action> = this.actions$.pipe(
    ofType(SHOWS_ACTION_TYPES.LOAD_SHOWS.REQUESTED),
    mergeMap(action => this.httpService.getShows().pipe(
      map(shows => ({type: SHOWS_ACTION_TYPES.LOAD_SHOWS.SUCCEEDED, payload: shows}))
    ))
  );

  @Effect()
  loadGenres$: Observable<Action> = this.actions$.pipe(
    ofType(SHOWS_ACTION_TYPES.LOAD_GENRES.REQUESTED),
    mergeMap(action => this.httpService.getGenres().pipe(
      map(genres => ({type: SHOWS_ACTION_TYPES.LOAD_GENRES.SUCCEEDED, payload: genres}))
    ))
  );

  @Effect()
  loadYears$: Observable<Action> = this.actions$.pipe(
    ofType(SHOWS_ACTION_TYPES.LOAD_YEARS.REQUESTED),
    mergeMap(action => this.httpService.getYears().pipe(
      map(years => ({type: SHOWS_ACTION_TYPES.LOAD_YEARS.SUCCEEDED, payload: years}))
    ))
  );
}
