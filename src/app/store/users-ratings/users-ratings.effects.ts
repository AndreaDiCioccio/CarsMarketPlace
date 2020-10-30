import { BrandCB, UserRating } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import * as usersRatingsActions from './users-ratings.actions'
import { Subject } from 'rxjs';

@Injectable()
export class UsersRatingsEffects{

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getUsersRatings$ = createEffect(() => 
        this.actions$.pipe(
            ofType(usersRatingsActions.getUsersRatings.type),
            mergeMap( () => this.mockService.getUsersRatings()),
            map( (usersRatings:UserRating[]) => usersRatingsActions.getUsersRatingsSuccess({usersRatings}))
        )
    )

    addRating$ = createEffect( () => 
        this.actions$.pipe(
            ofType(usersRatingsActions.addRating.type),
            mergeMap( (rating:any) => this.mockService.addUserRating(rating.rating)),
            map( (rating:UserRating) => usersRatingsActions.addRatingSuccess({rating:rating}))
        )
    )


}