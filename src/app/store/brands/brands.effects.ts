import { BrandCB } from './../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import * as brandsActions from './brands.actions'
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Car } from '../../interfaces';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BrandsEffects implements OnDestroy{

    unsubscribe:Subject<boolean> = new Subject()

    constructor( private actions$: Actions, private mockService: MockService ) {}

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
        this.unsubscribe.complete()
    }

    getAllBrands$ = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.getBrands.type),
            mergeMap( () => this.mockService.getBrands()),
            map( (brands:BrandCB[]) => brandsActions.getBrandsSuccess({brands})),
            takeUntil(this.unsubscribe)
        )
    )

    setBrandChecked = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.setBrandChecked.type),
            mergeMap( brand => this.mockService.setBrandChecked(brand)),
            map( (brand:BrandCB) => brandsActions.setBrandCheckedSuccess({brand})),
            takeUntil(this.unsubscribe)
        )
    )

    setBrandsChecked = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.setBrandsChecked.type),
            mergeMap( brands => this.mockService.setBrandsChecked(brands)),
            map( (brands:BrandCB[]) => brandsActions.setBrandsCheckedSuccess({brands})),
            takeUntil(this.unsubscribe)
        )
    )

}