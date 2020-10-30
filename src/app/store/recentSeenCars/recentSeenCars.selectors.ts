
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { RecentSeenCarsState } from './models'
import * as usersRecentSeenCarsReducers  from './recentSeenCars.reducers'
import { RecentSeenCar } from '../../interfaces'

export const selectRecentSeenCarsState = createFeatureSelector<RecentSeenCarsState>('recentSeenCars')
 
export const getRecentSeenCars = createSelector(
    selectRecentSeenCarsState,
    usersRecentSeenCarsReducers.selectAll
)
