import {Show} from '../../show';
import {SHOWS_ACTION_TYPES} from './actions';

export interface ShowsState {
  searchQuery: string;
  selectedYear: string;
  selectedGenre: string;
  years: string[];
  genres: string[];
  shows: Show[]
}

const initialShowsState: ShowsState = {
  searchQuery: '',
  selectedYear: '',
  selectedGenre: '',
  years: [],
  genres: [],
  shows: [],
};

export function showsReducer(state = initialShowsState, action) {
  switch (action.type) {
    case SHOWS_ACTION_TYPES.LOAD_SHOWS.SUCCEEDED:
      return {
        ...state,
        shows: action.payload
      };
    case SHOWS_ACTION_TYPES.LOAD_GENRES.SUCCEEDED:
      return  {
        ...state,
        genres: action.payload
      }
    case SHOWS_ACTION_TYPES.LOAD_YEARS.SUCCEEDED:
      return {
        ...state,
        years: action.payload
      }
    default:
      return state;
  }
}
