import { BrandCB } from './../../interfaces';
import { createAction, props } from '@ngrx/store'
import { Car } from '../../interfaces'

export const getBrands = createAction(
    '[Cars] Get Brands'
)

export const getBrandsSuccess = createAction(
    '[Cars] Get Brands Success',
    props<{brands:BrandCB[]}>()
)