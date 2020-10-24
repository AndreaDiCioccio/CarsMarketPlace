
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ObservedCarsState } from './models'
import * as usersObservedCarsReducers  from './userObservedCars.reducers'

export const selectUsersObservedCarsState = createFeatureSelector<ObservedCarsState>('userObservedCars')
 
export const getUsersObservedCars = createSelector(
    selectUsersObservedCarsState,
    usersObservedCarsReducers.selectAll
)
