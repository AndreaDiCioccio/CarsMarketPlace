import { observedCars } from '../../mockData';
import { Car, ObservedCar } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import * as observedCarsActions from './userObservedCars.actions'

@Injectable()
export class ObservedCarsEffects{

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getUsersObservedCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.getUserObservedCars.type),
            mergeMap( () => this.mockService.getUserObservedCars()),
            map( (observedCars:ObservedCar[]) => observedCarsActions.getUserObservedCarsSuccess({observedCars}))
        )
    )

    setObservedCar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.setObservedCar.type),
            mergeMap( (carId:number) => this.mockService.setObservedCar(carId)),
            map( observed => observedCarsActions.setObservedCarSuccess({observed}))
        )
    )

    setNotObservedCar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.setNotObservedCar.type),
            mergeMap( (notObserved:ObservedCar) => this.mockService.setNotObservedCar(notObserved )),
            map( observedCars => observedCarsActions.setNotObservedCarSuccess({observedCars}))
        )
    )

    removeObservedCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.removeSelectedCars.type),
            mergeMap( (action) => this.mockService.removeObservedCars(action['cars'])),
            map( cars => observedCarsActions.removeSelectedCarsSuccess({cars}))
        )
    )

}