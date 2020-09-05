import { UserRatings } from './../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getUsersRatings = createAction(
    '[Cars] Get Users Ratings'
)

export const getUsersRatingsSuccess = createAction(
    '[Cars] Get Users Rating Success',
    props<{usersRatings:UserRatings[]}>()
)