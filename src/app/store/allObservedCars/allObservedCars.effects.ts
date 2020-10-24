import { ObservedCar } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map} from 'rxjs/operators'
import { Injectable } from '@angular/core';
import * as observedCarsActions from './allObservedCars.actions'

@Injectable()
export class ObservedCarsEffects{

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getUsersObservedCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(observedCarsActions.getAllObservedCars.type),
            mergeMap( () => this.mockService.getAllObservedCars()),
            map( (observedCars:ObservedCar[]) => observedCarsActions.getAllObservedCarsSuccess({observedCars}))
        )
    )

}