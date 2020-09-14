import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import * as observedCarsReducers from './observedCars.reducers'
import { ObservedCarsEffects } from "./observedCars.effects";


@NgModule({
    imports: [
        StoreModule.forFeature('observedCars', observedCarsReducers.observedCarsReducers),
        EffectsModule.forFeature([ObservedCarsEffects])
    ]
})

export class ObservedCarsModule {}