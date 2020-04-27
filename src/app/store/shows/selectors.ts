import {AppState} from '../root.reducers';
import {createSelector} from '@ngrx/store';
import {ShowsState} from './reducer';
import {filterByGenre, filterBySearch, filterByYear} from '../../pages/shows/data-table/data-table.helper';

export const getShowsState = (state: AppState) => state.shows;

export const getGenres = createSelector(
  getShowsState,
  (state: ShowsState) => state.genres
);

export const getYears = createSelector(
  getShowsState,
  (state: ShowsState) => state.years
);

export const getSearchQuery = createSelector(
  getShowsState,
  (state) => state.searchQuery
)

export const getSelectedGenre = createSelector(
  getShowsState,
  (state) => state.selectedGenre
)

export const getSelectedYear = createSelector(
  getShowsState,
  (state) => state.selectedYear
)

export const getShows = createSelector(
  getShowsState,
  getSearchQuery,
  getSelectedGenre,
  getSelectedYear,
  (state: ShowsState, query, genre: string, year: string) => {
    return state.shows
      .filter(filterBySearch.bind(this, query))
      .filter(filterByGenre.bind(this, genre))
      .filter(filterByYear.bind(this, year))
  }
);



