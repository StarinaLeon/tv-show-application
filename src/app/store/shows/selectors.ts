import {AppState} from '../root.reducers';
import {createSelector} from '@ngrx/store';
import {ShowsState} from './reducer';

export const getShowsState = (state: AppState) => state.shows;

export const getShows = createSelector(
  getShowsState,
  (state: ShowsState) =>state.shows
);

export const getGenres = createSelector(
  getShowsState,
  (state: ShowsState) =>state.genres
);


export const getYears = createSelector(
  getShowsState,
  (state: ShowsState) =>state.years
);

