import { Car } from './../../interfaces'
import { createEntityAdapter } from '@ngrx/entity'
import { compareCars, CarsState } from './models'
import { createReducer, on, Action } from '@ngrx/store'
import * as carsActions from './cars.actions'

export const adapter = createEntityAdapter<Car>({
    sortComparer:compareCars
})

export const initialCarsState = adapter.getInitialState()

export const carsReducers = createReducer(
    initialCarsState,
    on(carsActions.getAllCarsSuccess, (state, action) => adapter.addAll(action.cars, state)),
    on(carsActions.setCarsWithObservedSuccess, (state, action) => adapter.addAll(action.cars, state)),
)

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: CarsState | undefined, action: Action) {
    return carsReducers(state, action)
}
