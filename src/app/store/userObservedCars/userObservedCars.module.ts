import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import * as observedCarsReducers from './userObservedCars.reducers'
import { ObservedCarsEffects } from "./userObservedCars.effects";


@NgModule({
    imports: [
        StoreModule.forFeature('userObservedCars', observedCarsReducers.observedCarsReducers),
        EffectsModule.forFeature([ObservedCarsEffects])
    ]
})

export class UserObservedCarsModule {}