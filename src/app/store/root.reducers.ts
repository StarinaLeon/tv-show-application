import {showsReducer, ShowsState} from './shows/reducer';

export const reducers = {
  shows: showsReducer
}

export interface AppState {
  shows: ShowsState;
}
