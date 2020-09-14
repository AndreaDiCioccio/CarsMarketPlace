
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { RecentSeenCarsState } from './models'
import * as usersRecentSeenCarsReducers  from './recentSeenCars.reducers'
import { RecentSeenCar } from '../../interfaces'

export const selectUsersRatingsState = createFeatureSelector<RecentSeenCarsState>('recentSeenCars')
 
export const getUsers = createSelector(
    selectUsersRatingsState,
    usersRecentSeenCarsReducers.selectAll
)
