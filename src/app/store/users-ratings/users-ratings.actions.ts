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

export const addRating = createAction(
    '[Rating] Add Rating',
    props<{rating:UserRating}>()
)

export const addRatingSuccess = createAction(
    '[Rating] Add Rating Success',
    props<{rating:UserRating}>()
)