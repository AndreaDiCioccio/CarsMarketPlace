import { Action, createReducer, on } from '@ngrx/store';
import { StatusState } from './status.models';
import * as statusActions from './status.actions'

const initialState: StatusState = {
    isStoreLoaded: false,
    isAllCarsLoaded: false,
    isRecentSeenCarsLoaded:false,
    isObservedCarsLoaded:false,
    isAllObservedCarsLoaded:false,
    isUsersRatingsLoaded:false
}

const userReducer = createReducer(
    initialState,
    on(statusActions.setStoreLoaded, (state, {loaded}) => ({ isStoreLoaded:loaded })),
    on(statusActions.setRecentSeenCarsLoaded, (state, {loaded}) => ({...state, isRecentSeenCarsLoaded:loaded })),
    on(statusActions.setUserObservedCarsLoaded, (state, {loaded}) => ({...state, isObservedCarsLoaded:loaded})),
    on(statusActions.setUserObservedCarsLoaded, (state, {loaded}) => ({...state, isObservedCarsLoaded:loaded})),
    on(statusActions.setAllObservedCarsLoaded, (state, {loaded}) => ({...state, isAllObservedCarsLoaded:loaded}))
);
  
export function reducer(state: StatusState | undefined, action: Action) {
    return userReducer(state, action);
}