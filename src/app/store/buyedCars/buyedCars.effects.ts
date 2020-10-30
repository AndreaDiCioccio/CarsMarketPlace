import { observedCars } from '../../mockData';
import { Car, ObservedCar, BuyedCar } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import * as buyedCarsActions from './buyedCars.actions'

@Injectable()
export class BuyedCarsEffects{

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getBuyedCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(buyedCarsActions.getBuyedCars.type),
            mergeMap( () => this.mockService.getBuyedCars()),
            map( (buyedCars:BuyedCar[]) => buyedCarsActions.getBuyedCarsSuccess({buyedCars}))
        )
    )

    addBuyedCar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(buyedCarsActions.addBuyedCar.type),
            mergeMap( (carId:number) => this.mockService.addBuyedCar(carId)),
            map( (buyedCar:BuyedCar) => buyedCarsActions.addBuyedCarSuccess({buyedCar}))
        )
    )

}