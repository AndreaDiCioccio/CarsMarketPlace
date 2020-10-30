import { buyedCars } from './../../mockData';

import { createFeatureSelector, createSelector } from '@ngrx/store'
import { BuyedCarsState } from './models'
import * as buyedCarsReducers  from './buyedCars.reducers'

export const selectBuyedCarsState = createFeatureSelector<BuyedCarsState>('buyedCars')
 
export const getBuyedCars = createSelector(
    selectBuyedCarsState,
    buyedCarsReducers.selectAll
)
