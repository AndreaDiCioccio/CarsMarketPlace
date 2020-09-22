import { TypeCB } from './../../interfaces';
import { UserRating } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getUsersRatings = createAction(
    '[Ratings] Get Users Ratings'
)

export const getUsersRatingsSuccess = createAction(
    '[Ratings] Get Users Rating Success',
    props<{usersRatings:UserRating[]}>()
)