import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import * as observedCarsReducers from './allObservedCars.reducers'
import { ObservedCarsEffects } from "./allObservedCars.effects";


@NgModule({
    imports: [
        StoreModule.forFeature('allObservedCars', observedCarsReducers.observedCarsReducers),
        EffectsModule.forFeature([ObservedCarsEffects])
    ]
})

export class AllObservedCarsModule {}