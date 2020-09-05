
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UsersRatingsState } from './models'
import * as usersRatingsReducers  from './users-ratings.reducers'

export const selectUsersRatingsState = createFeatureSelector<UsersRatingsState>('usersRatings')
 
export const getUsersRatings = createSelector(
    selectUsersRatingsState,
    usersRatingsReducers.selectAll
)
