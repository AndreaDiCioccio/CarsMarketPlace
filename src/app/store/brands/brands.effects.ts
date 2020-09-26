import { BrandCB } from './../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import * as brandsActions from './brands.actions'
import { mergeMap, map, tap, takeUntil } from 'rxjs/operators'
import { Car } from '../../interfaces';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BrandsEffects{

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getAllBrands$ = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.getBrands.type),
            mergeMap( () => this.mockService.getBrands()),
            map( (brands:BrandCB[]) => brandsActions.getBrandsSuccess({brands}))
        )
    )

    setBrandChecked = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.setBrandChecked.type),
            mergeMap( brand => this.mockService.setBrandChecked(brand)),
            map( (brand:BrandCB) => brandsActions.setBrandCheckedSuccess({brand}))
        )
    )

    setBrandsChecked = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.setBrandsChecked.type),
            mergeMap( brands => this.mockService.setBrandsChecked(brands)),
            map( (brands:BrandCB[]) => brandsActions.setBrandsCheckedSuccess({brands}))
        )
    )

}