import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromApp from './app';

export interface State {
  app: fromApp.AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const AppState = createFeatureSelector<fromApp.AppState>('app');

export const getUser = createSelector(AppState, state => state.user);
export const getName = createSelector(getUser, state => state ? state.name : null);
export const getMessages = createSelector(AppState, state => state.messages);
