import {Action} from '@ngrx/store';

const moduleName = 'Shows';


export const SHOWS_ACTION_TYPES = {
  LOAD_SHOWS: {
    REQUESTED: `[${moduleName}] Shows requested`,
    SUCCEEDED: `[${moduleName}] Shows succeeded`,
    FAILED: `[${moduleName}] Shows failed`,
  },
  LOAD_GENRES: {
    REQUESTED: `[${moduleName}] Genres requested`,
    SUCCEEDED: `[${moduleName}] Genres succeeded`,
    FAILED: `[${moduleName}] Genres failed`,
  },
  LOAD_YEARS: {
    REQUESTED: `[${moduleName}] Years requested`,
    SUCCEEDED: `[${moduleName}] Years succeeded`,
    FAILED: `[${moduleName}] Years failed`,
  },
  SEARCH_QUERY_CHANGED: `[${moduleName}] Search Query changed`,
  GENRE_SELECTED: `[${moduleName}] Genre selected`,
  YEARS_SELECTED: `[${moduleName}] Years selected`,
  CURRENT_PAGE_CHANGED: `[${moduleName}] Current Page changed`,
  ITEMS_PER_PAGE_CHANGED: `[${moduleName}] Items Per Page changed`,
  SORTING_CHANGED: `[${moduleName}] Sorting changed`
};

export class LoadShows implements Action {
  readonly type = SHOWS_ACTION_TYPES.LOAD_SHOWS.REQUESTED;
}


export class LoadGenres implements Action {
  readonly type = SHOWS_ACTION_TYPES.LOAD_GENRES.REQUESTED;
}

export class LoadYears implements Action {
  readonly type = SHOWS_ACTION_TYPES.LOAD_YEARS.REQUESTED;
}

export class ChangeSearchQuery implements Action {
  readonly type = SHOWS_ACTION_TYPES.SEARCH_QUERY_CHANGED;

  constructor(public payload: string) {
  }
}

export class SelectGenre implements Action {
  readonly type = SHOWS_ACTION_TYPES.GENRE_SELECTED;

  constructor(public payload: string) {
  }
}

export class SelectYear implements Action {
  readonly type = SHOWS_ACTION_TYPES.YEARS_SELECTED;

  constructor(public payload: string) {
  }
}

export class ChangeCurrentPage implements Action {
  readonly type = SHOWS_ACTION_TYPES.CURRENT_PAGE_CHANGED;
  constructor(public payload: number) {
  }
}

export class ChangeItemsPerPage  implements Action{
  readonly type = SHOWS_ACTION_TYPES.ITEMS_PER_PAGE_CHANGED;
  constructor(public payload: number) {
  }
}

export class ChangeSorting implements Action {
  readonly type =  SHOWS_ACTION_TYPES.SORTING_CHANGED;
  constructor(public payload: {}) {
  }
}

