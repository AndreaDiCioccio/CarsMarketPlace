import { observedCars } from '../../mockData';
import { Car, ObservedCar } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import * as observedCarsActions from './observedCars.actions'

@Injectable()
export class ObservedCarsEffects {

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getUsersObservedCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.getObservedCars.type),
            mergeMap( () => this.mockService.getObservedCars()),
            map( (observedCars:ObservedCar[]) => observedCarsActions.getObservedCarsSuccess({observedCars}))
        )
    )

    setObservedCar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.setObservedCar.type),
            mergeMap( (carId:number) => this.mockService.setObservedCar(carId)),
            map( observed => observedCarsActions.setObservedCarSuccess({observed})),
        )
    )

    setNotObservedCar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.setNotObservedCar.type),
            mergeMap( (notObserved:ObservedCar) => this.mockService.setNotObservedCar(notObserved )),
            map( observedCars => observedCarsActions.setNotObservedCarSuccess({observedCars}))
        )
    )

}