import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as ObservedCarsActions from './userObservedCars.actions'
import { ObservedCarsState } from './models';
import { ObservedCar } from '../../interfaces';

export const adapter = createEntityAdapter<ObservedCar>({})

export const initialObservedCarsState = adapter.getInitialState()

export const observedCarsReducers = createReducer(
    initialObservedCarsState,
    on(ObservedCarsActions.getUserObservedCarsSuccess, (state, action) => adapter.addAll(action.observedCars , state)),
    on(ObservedCarsActions.setObservedCarSuccess, (state, action) => adapter.addOne(action.observed, state)),
    on(ObservedCarsActions.setNotObservedCarSuccess, (state, action) => adapter.removeAll(state)),
    on(ObservedCarsActions.setNotObservedCarSuccess, (state, action) => adapter.addAll(action.observedCars, state)),
    on(ObservedCarsActions.removeSelectedCarsSuccess, (state, action) => adapter.removeMany(entity => predicate(action.cars, entity.carId) , state))
);

function predicate(carsIds:number[], carId:number): boolean {
    return carsIds.includes(carId)
}

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: ObservedCarsState | undefined, action: Action) {
    return observedCarsReducers(state, action)
}