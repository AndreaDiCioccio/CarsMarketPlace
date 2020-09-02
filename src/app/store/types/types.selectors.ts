
import * as typesReducers from './types.reducers'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { TypesState } from './models'

export const selectTypesState = createFeatureSelector<TypesState>('types')
 
export const getTypes = createSelector(
    selectTypesState,
    typesReducers.selectAll
)
