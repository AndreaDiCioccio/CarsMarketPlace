import { BrandCB, UserRating } from '../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import { mergeMap, map, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import * as usersRatingsActions from './users-ratings.actions'

@Injectable()
export class UsersRatingsEffects {

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getUsersRatings$ = createEffect(() => 
        this.actions$.pipe(
            ofType(usersRatingsActions.getUsersRatings.type),
            mergeMap( () => this.mockService.getUsersRatings()),
            map( (usersRatings:UserRating[]) => usersRatingsActions.getUsersRatingsSuccess({usersRatings}))
        )
    )

}