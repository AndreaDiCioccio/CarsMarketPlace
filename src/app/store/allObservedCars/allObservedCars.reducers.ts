import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as ObservedCarsActions from './allObservedCars.actions'
import { ObservedCarsState } from './models';
import { ObservedCar } from '../../interfaces';

export const adapter = createEntityAdapter<ObservedCar>({})

export const initialObservedCarsState = adapter.getInitialState()

export const observedCarsReducers = createReducer(
    initialObservedCarsState,
    on(ObservedCarsActions.getAllObservedCarsSuccess, (state, action) => adapter.addAll(action.observedCars , state))
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: ObservedCarsState | undefined, action: Action) {
    return observedCarsReducers(state, action)
}