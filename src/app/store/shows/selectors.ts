import {AppState} from '../root.reducers';
import {createSelector} from '@ngrx/store';
import {ShowsState} from './reducer';
import {filterByGenre, filterBySearch, filterByYear, sortByDate, sortByName} from '../../pages/shows/data-table/data-table.helper';

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

export const getSorting = createSelector(
  getShowsState,
  (state) => state.sorting
)


export const getShows = createSelector(
  getShowsState,
  getSearchQuery,
  getSelectedGenre,
  getSelectedYear,
  getSorting,
  (state: ShowsState, query, genre: string, year: string, sorting) => {
    const filteredShows = state.shows
      .filter(filterBySearch.bind(this, query))
      .filter(filterByGenre.bind(this, genre))
      .filter(filterByYear.bind(this, year))

    // sort
      switch(sorting.active) {
        case 'name':
        case 'seasons':
        case 'network':
          filteredShows.sort(sortByName);
          break;
        case 'premiereDate':
          filteredShows.sort(sortByDate);
          break;
      }
      return filteredShows
  }
);

export const getShowsLength = createSelector(
  getShows, (shows) => shows.length
);

export const getCurrentPage = createSelector(
  getShowsState,
  (state) => state.currentPage
);

export const getItemsPerPage = createSelector(
  getShowsState,
  (state) => state.itemsPerPage
)


export const getCurrentPageShows= createSelector(
  getShows,
  getCurrentPage,
  getItemsPerPage,
  (shows, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    return shows.slice(startIndex, endIndex)
  }
)


