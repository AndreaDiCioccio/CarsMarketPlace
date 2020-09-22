import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import * as carsActions from './cars.actions'
import { mergeMap, map, takeUntil } from 'rxjs/operators'
import { Car } from '../../interfaces';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CarsEffects implements OnDestroy{

    unsubscribe:Subject<boolean> = new Subject()

    constructor( private actions$: Actions, private mockService: MockService ) {}

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
        this.unsubscribe.complete()
    }

    getAllCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(carsActions.getAllCars.type),
            mergeMap( () => this.mockService.getAllCars()),
            map( (cars:Car[]) => carsActions.getAllCarsSuccess({cars})),
            takeUntil(this.unsubscribe)
        )
    )

    getCarsWithObserved$ = createEffect(() => 
        this.actions$.pipe(
            ofType(carsActions.setCarsWithObserved.type),
            mergeMap( (cars:Car[]) => this.mockService.setCarsWithObserved(cars)),
            map( (cars:Car[]) => carsActions.setCarsWithObservedSuccess({cars})),
            takeUntil(this.unsubscribe)
        )
    )

}