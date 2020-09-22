import { RecentSeenCar } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import * as recentSeenCarsActions from './recentSeenCars.actions'
import { Subject } from 'rxjs';

@Injectable()
export class RecentSeenCarsEffects implements OnDestroy{

    unsubscribe:Subject<boolean> = new Subject()

    constructor( private actions$: Actions, private mockService: MockService ) {}

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
        this.unsubscribe.complete()
    }

    getUsersRatings$ = createEffect(() => 
        this.actions$.pipe(
            ofType(recentSeenCarsActions.getRecentSeenCars.type),
            mergeMap( () => this.mockService.getRecentSeenCars()),
            map( (recentSeenCars:RecentSeenCar[]) => recentSeenCarsActions.getRecentSeenCarsSuccess({recentSeenCars})),
            takeUntil(this.unsubscribe)
        )
    )

}