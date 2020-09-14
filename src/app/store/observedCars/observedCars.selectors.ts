
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ObservedCarsState } from './models'
import * as usersObservedCarsReducers  from './observedCars.reducers'

export const selectUsersObservedCarsState = createFeatureSelector<ObservedCarsState>('observedCars')
 
export const getUsers = createSelector(
    selectUsersObservedCarsState,
    usersObservedCarsReducers.selectAll
)
