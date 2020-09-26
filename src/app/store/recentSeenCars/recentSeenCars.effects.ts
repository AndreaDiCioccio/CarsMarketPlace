import { RecentSeenCar } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import * as recentSeenCarsActions from './recentSeenCars.actions'
import { Subject } from 'rxjs';

@Injectable()
export class RecentSeenCarsEffects{

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getUsersRatings$ = createEffect(() => 
        this.actions$.pipe(
            ofType(recentSeenCarsActions.getRecentSeenCars.type),
            mergeMap( () => this.mockService.getRecentSeenCars()),
            map( (recentSeenCars:RecentSeenCar[]) => recentSeenCarsActions.getRecentSeenCarsSuccess({recentSeenCars}))
        )
    )

}