import { createAction, props } from '@ngrx/store'
import { Car } from '../../interfaces'

export const getAllCars = createAction(
    '[Cars] Get All Cars'
)

export const getAllCarsSuccess = createAction(
    '[Cars] Get All Cars Success',
    props<{cars:Car[]}>()
)