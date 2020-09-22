import { TypeCB } from './../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import * as typesActions from './types.actions'
import { mergeMap, map, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable()
export class TypesEffects {

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getTypes$ = createEffect(() => 
        this.actions$.pipe(
            ofType(typesActions.getTypes.type),
            mergeMap( () => this.mockService.getTypes()),
            map( (types:TypeCB[]) => typesActions.getTypesSuccess({types}))
        )
    )

    setTypeChecked$ = createEffect(() => 
        this.actions$.pipe(
            ofType(typesActions.setTypeChecked.type),
            mergeMap( type => this.mockService.setTypeChecked(type)),
            map( (typee:TypeCB) => typesActions.setTypeCheckedSuccess({typee}))
        )
    )

    setTypesChecked$ = createEffect(() => 
        this.actions$.pipe(
            ofType(typesActions.setTypesChecked.type),
            mergeMap( types => this.mockService.setTypesChecked(types)),
            map( (types:TypeCB[]) => typesActions.setTypesCheckedSuccess({types}))
        )
    )

}