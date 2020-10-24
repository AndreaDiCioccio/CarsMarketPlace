import { ObservedCar, Car } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getUserObservedCars = createAction(
    '[Users] Get UserObservedCars'
)

export const getUserObservedCarsSuccess = createAction(
    '[Users] Get UserObservedCars Success',
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

export const removeSelectedCars = createAction(
    '[Container Observed] RemoveObservedCars',
    props<{cars:number[]}>()
)

export const removeSelectedCarsSuccess = createAction(
    '[Container Observed] RemoveObservedCars Success',
    props<{cars:number[]}>()
)