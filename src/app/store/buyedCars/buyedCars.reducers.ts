import { buyedCars } from './../../mockData';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as buyedCarsActions from './buyedCars.actions'
import { BuyedCarsState } from './models';
import { BuyedCar } from '../../interfaces';

export const adapter = createEntityAdapter<BuyedCar>({})

export const initialObservedCarsState = adapter.getInitialState()

export const buyedCarsReducers = createReducer(
    initialObservedCarsState,
    on(buyedCarsActions.getBuyedCarsSuccess, (state, action) => adapter.addAll(action.buyedCars , state)),
    on(buyedCarsActions.addBuyedCarSuccess, (state, action) => adapter.addOne(action.buyedCar, state))
    
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: BuyedCarsState | undefined, action: Action) {
    return buyedCarsReducers(state, action)
}