import { ObservedCar, Car } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getObservedCars = createAction(
    '[Users] Get ObservedCars'
)

export const getObservedCarsSuccess = createAction(
    '[Users] Get ObservedCars Success',
    props<{observedCars:ObservedCar[]}>()
)

export const setObservedCar = createAction(
    '[Users] Set Observed Car',
    props<{carId:number}>()
)

export const setObservedCarSuccess = createAction(
    '[Users] Set Observed Car Success',
    props<{observed:ObservedCar}>()
)

export const setNotObservedCar = createAction(
    '[Users] Set Not Observed Car',
    props<{carId:number}>()
)

export const setNotObservedCarSuccess = createAction(
    '[Users] Set Not Observed Car Success',
    props<{observedCars:ObservedCar[]}>()
)