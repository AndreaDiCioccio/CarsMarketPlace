import { createAction, props } from '@ngrx/store'
import { Car } from '../../interfaces'
import { Update } from '@ngrx/entity'

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
/* 
export const setCarWithObserved = createAction(
    '[Cars] Set Car With Observed',
    props<{car:Car}>()
)

export const setCarWithObservedSuccess = createAction(
    '[Cars] Set Car With Observed Success',
    props<{car:Car}>()
) */