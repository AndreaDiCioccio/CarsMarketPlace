
import * as brandsReducers from './brands.reducers'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { BrandsState } from './models'

export const selectBrandsState = createFeatureSelector<BrandsState>('brands')
 
export const getBrands = createSelector(
    selectBrandsState,
    brandsReducers.selectAll
)
