import { BrandCB, UserRating } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import * as usersRatingsActions from './users-ratings.actions'
import { Subject } from 'rxjs';

@Injectable()
export class UsersRatingsEffects implements OnDestroy{

    unsubscribe:Subject<boolean> = new Subject()

    constructor( private actions$: Actions, private mockService: MockService ) {}

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
        this.unsubscribe.complete()
    }

    getUsersRatings$ = createEffect(() => 
        this.actions$.pipe(
            ofType(usersRatingsActions.getUsersRatings.type),
            mergeMap( () => this.mockService.getUsersRatings()),
            map( (usersRatings:UserRating[]) => usersRatingsActions.getUsersRatingsSuccess({usersRatings})),
            takeUntil(this.unsubscribe)
        )
    )

}