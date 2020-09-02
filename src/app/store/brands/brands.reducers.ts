import { BrandCB } from './../../interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { BrandsState, compareBrands } from './models';
import { createReducer, on, Action } from '@ngrx/store';
import * as brandsActions from './brands.actions'

export const adapter = createEntityAdapter<BrandCB>({
    sortComparer:compareBrands
})

export const initialBrandsState = adapter.getInitialState()

export const brandsReducers = createReducer(
    initialBrandsState,
    on(brandsActions.getBrandsSuccess, (state, action) => adapter.addAll(action.brands, state)),
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: BrandsState | undefined, action: Action) {
    return brandsReducers(state, action)
}