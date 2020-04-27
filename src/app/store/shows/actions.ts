import {Action} from '@ngrx/store';
import {ShowInterface} from '../../shared/interfaces/show.interface';

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

