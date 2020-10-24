
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ObservedCarsState } from './models'
import * as usersObservedCarsReducers  from './allObservedCars.reducers'

export const selectUsersObservedCarsState = createFeatureSelector<ObservedCarsState>('allObservedCars')
 
export const getAllObservedCars = createSelector(
    selectUsersObservedCarsState,
    usersObservedCarsReducers.selectAll
)
