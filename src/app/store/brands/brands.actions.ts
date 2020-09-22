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

export const setBrandChecked = createAction(
    '[contenier gallery] Set Brand Checked',
    props<{brand:BrandCB}>()
)

export const setBrandCheckedSuccess = createAction(
    '[contenier gallery] Set Brand Checked Success',
    props<{brand:BrandCB}>()
)

export const setBrandsChecked = createAction(
    '[conteiner gallery] Set Brands Checked',
    props<{brands:BrandCB[]}>()
)

export const setBrandsCheckedSuccess = createAction(
    '[conteiner gallery] Set Brands Checked Success',
    props<{brands:BrandCB[]}>()
)