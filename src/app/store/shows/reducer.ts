import {ShowInterface} from '../../shared/interfaces/show.interface';
import {SHOWS_ACTION_TYPES} from './actions';
import {Sort} from '@angular/material/sort';

export interface ShowsState {
  searchQuery: string;
  selectedYear: string;
  selectedGenre: string;
  years: string[];
  genres: string[];
  shows: ShowInterface[];
  currentPage: number;
  itemsPerPage: number;
  sorting: Sort
}

const initialShowsState: ShowsState = {
  searchQuery: '',
  selectedYear: '',
  selectedGenre: '',
  years: [],
  genres: [],
  shows: [],
  currentPage: 1,
  itemsPerPage: 10,
  sorting: {active: "name", direction: "asc"}
};

export function showsReducer(state = initialShowsState, action) {
  switch (action.type) {
    case SHOWS_ACTION_TYPES.LOAD_SHOWS.SUCCEEDED:
      return {
        ...state,
        shows: action.payload
      };
    case SHOWS_ACTION_TYPES.LOAD_GENRES.SUCCEEDED:
      return {
        ...state,
        genres: action.payload
      };
    case SHOWS_ACTION_TYPES.LOAD_YEARS.SUCCEEDED:
      return {
        ...state,
        years: action.payload
      };
    case SHOWS_ACTION_TYPES.SEARCH_QUERY_CHANGED:
      return {
        ...state,
        searchQuery: action.payload
      }
    case SHOWS_ACTION_TYPES.GENRE_SELECTED:
      return {
        ...state,
        selectedGenre: action.payload
      }
    case SHOWS_ACTION_TYPES.YEARS_SELECTED:
      return {
        ...state,
        selectedYear: action.payload
      }
    case SHOWS_ACTION_TYPES.CURRENT_PAGE_CHANGED:
      return {
        ...state,
        currentPage: action.payload
      }
    case SHOWS_ACTION_TYPES.ITEMS_PER_PAGE_CHANGED:
      return {
        ...state,
        currentPage: initialShowsState.currentPage,
        itemsPerPage: action.payload
      }
    case SHOWS_ACTION_TYPES.SORTING_CHANGED:
      return {
        ...state,
        sorting: action.payload
      }
    default:
      return state;
  }
}
