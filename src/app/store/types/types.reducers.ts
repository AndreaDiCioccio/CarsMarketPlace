import {  TypeCB } from '../../interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { TypesState, compareTypes } from './models';
import { createReducer, on, Action } from '@ngrx/store';
import * as typesActions from './types.actions'

export const adapter = createEntityAdapter<TypeCB>({
    sortComparer:compareTypes
})

export const initialTypesState = adapter.getInitialState()

export const typesReducers = createReducer(
    initialTypesState,
    on(typesActions.getTypesSuccess, (state, action) => adapter.addAll(action.types, state)),
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: TypesState | undefined, action: Action) {
    return typesReducers(state, action)
}