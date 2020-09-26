import { Action, createReducer, on } from '@ngrx/store';
import { StatusState } from './models.status';
import * as statusActions from './actions.status'

const initialState: StatusState = {
    isStoreLoaded: false,
    isRecentSeenCarsLoaded:false
}

const userReducer = createReducer(
    initialState,
    on(statusActions.setStoreLoaded, (state, {loaded}) => ({ isStoreLoaded:loaded })),
    on(statusActions.setRecentSeenCarsLoaded, (state, {loaded}) => ({...state, isRecentSeenCarsLoaded:loaded }))
);
  
export function reducer(state: StatusState | undefined, action: Action) {
    return userReducer(state, action);
}