
import * as carsReducers from './cars.reducers'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CarsState } from './models'

export const selectCarsState = createFeatureSelector<CarsState>('cars')
 
export const getAllCars = createSelector(
    selectCarsState,
    carsReducers.selectAll
)
