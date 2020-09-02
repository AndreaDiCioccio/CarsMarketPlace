import { BrandCB } from './../../interfaces';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../../services/mock.service';
import * as brandsActions from './brands.actions'
import { mergeMap, map } from 'rxjs/operators'
import { Car } from '../../interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class BrandsEffects {

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getAllCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.getBrands.type),
            mergeMap( () => this.mockService.getBrands()),
            map( (brands:BrandCB[]) => brandsActions.getBrandsSuccess({brands}))
        )
    )

}