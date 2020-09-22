import { TypeCB } from './../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import * as typesActions from './types.actions'
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TypesEffects implements OnDestroy{

    unsubscribe:Subject<boolean> = new Subject()

    constructor( private actions$: Actions, private mockService: MockService ) {}

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
        this.unsubscribe.complete()
    }

    getTypes$ = createEffect(() => 
        this.actions$.pipe(
            ofType(typesActions.getTypes.type),
            mergeMap( () => this.mockService.getTypes()),
            map( (types:TypeCB[]) => typesActions.getTypesSuccess({types})),
            takeUntil(this.unsubscribe)
        )
    )

    setTypeChecked$ = createEffect(() => 
        this.actions$.pipe(
            ofType(typesActions.setTypeChecked.type),
            mergeMap( type => this.mockService.setTypeChecked(type)),
            map( (typee:TypeCB) => typesActions.setTypeCheckedSuccess({typee})),
            takeUntil(this.unsubscribe)
        )
    )

    setTypesChecked$ = createEffect(() => 
        this.actions$.pipe(
            ofType(typesActions.setTypesChecked.type),
            mergeMap( types => this.mockService.setTypesChecked(types)),
            map( (types:TypeCB[]) => typesActions.setTypesCheckedSuccess({types})),
            takeUntil(this.unsubscribe)
        )
    )

}