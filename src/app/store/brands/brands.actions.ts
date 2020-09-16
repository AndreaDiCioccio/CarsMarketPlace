import { BrandCB } from './../../interfaces';
import { createAction, props } from '@ngrx/store'
import { Car } from '../../interfaces'

export const getBrands = createAction(
    '[Brand] Get Brands'
)

export const getBrandsSuccess = createAction(
    '[Brand] Get Brands Success',
    props<{brands:BrandCB[]}>()
)

export const setBrandCount = createAction(
    '[Brand] Set Brand Count',
    props<{obj:BrandCB}>()
)