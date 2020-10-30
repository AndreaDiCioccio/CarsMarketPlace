import { ObservedCar, Car, BuyedCar } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getBuyedCars = createAction(
    '[Users] Get BuyedCars'
)

export const getBuyedCarsSuccess = createAction(
    '[Users] Get BuyedCars Success',
    props<{buyedCars:BuyedCar[]}>()
)

export const addBuyedCar = createAction(
    '[BuyedCar] Add BuyedCar',
    props<{carId:number}>()
)

export const addBuyedCarSuccess = createAction(
    '[BuyedCar] Add BuyedCar Success',
    props<{buyedCar:BuyedCar}>()
)