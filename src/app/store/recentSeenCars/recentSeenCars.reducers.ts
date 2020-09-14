import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as recentSeenCarsActions from './recentSeenCars.actions'
import { RecentSeenCar } from '../../interfaces';
import { RecentSeenCarsState } from './models';

export const adapter = createEntityAdapter<RecentSeenCar>({})

export const initialRecentSeenCarsState = adapter.getInitialState()

export const recentSeenCarsReducers = createReducer(
    initialRecentSeenCarsState,
    on(recentSeenCarsActions.getRecentSeenCarsSuccess, (state, action) => adapter.addAll(action.recentSeenCars , state)),
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: RecentSeenCarsState | undefined, action: Action) {
    return recentSeenCarsReducers(state, action)
}