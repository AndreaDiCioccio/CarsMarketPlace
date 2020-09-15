import { createAction, props } from '@ngrx/store'
import { Car } from '../../interfaces'

export const getAllCars = createAction(
    '[Cars] Get All Cars'
)

export const getAllCarsSuccess = createAction(
    '[Cars] Get All Cars Success',
    props<{cars:Car[]}>()
)

export const setCarsWithObserved = createAction(
    '[Cars] Set Cars With Observed',
    props<{cars:Car[]}>()
)

export const setCarsWithObservedSuccess = createAction(
    '[Cars] Set Cars With Observed Success',
    props<{cars:Car[]}>()
)