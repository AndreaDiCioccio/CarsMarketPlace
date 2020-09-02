import { CarsState } from './cars/models'
import { BrandsState } from './brands/models';

export interface StoreState {
    cars:CarsState,
    brands:BrandsState
}