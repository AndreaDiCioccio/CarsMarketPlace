import { RecentSeenCar } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getRecentSeenCars = createAction(
    '[Cars] Get RecentSeen'
)

export const getRecentSeenCarsSuccess = createAction(
    '[Cars] Get RecentSeen Success',
    props<{recentSeenCars:RecentSeenCar[]}>()
)