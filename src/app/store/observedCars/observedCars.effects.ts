import { observedCars } from '../../mockData';
import { Car, ObservedCar } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import * as observedCarsActions from './observedCars.actions'
import { Subject } from 'rxjs';

@Injectable()
export class ObservedCarsEffects implements OnDestroy{

    unsubscribe:Subject<boolean> = new Subject()

    constructor( private actions$: Actions, private mockService: MockService ) {}

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
        this.unsubscribe.complete()
    }

    getUsersObservedCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.getObservedCars.type),
            mergeMap( () => this.mockService.getObservedCars()),
            map( (observedCars:ObservedCar[]) => observedCarsActions.getObservedCarsSuccess({observedCars})),
            takeUntil(this.unsubscribe)
        )
    )

    setObservedCar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.setObservedCar.type),
            mergeMap( (carId:number) => this.mockService.setObservedCar(carId)),
            map( observed => observedCarsActions.setObservedCarSuccess({observed})),
            takeUntil(this.unsubscribe)
        )
    )

    setNotObservedCar$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.setNotObservedCar.type),
            mergeMap( (notObserved:ObservedCar) => this.mockService.setNotObservedCar(notObserved )),
            map( observedCars => observedCarsActions.setNotObservedCarSuccess({observedCars})),
            takeUntil(this.unsubscribe)
        )
    )

}