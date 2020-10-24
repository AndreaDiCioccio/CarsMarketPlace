import { ObservedCar, Car } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getAllObservedCars = createAction(
    '[Users] Get AllObservedCars'
)

export const getAllObservedCarsSuccess = createAction(
    '[Users] Get AllObservedCars Success',
    props<{observedCars:ObservedCar[]}>()
)
