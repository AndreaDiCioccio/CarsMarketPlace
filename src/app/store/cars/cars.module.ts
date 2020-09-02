import { CarsEffects } from "./cars.effects";
import * as carsReducers from "./cars.reducers";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        StoreModule.forFeature('cars', carsReducers.carsReducers),
        EffectsModule.forFeature([CarsEffects])
    ]
})

export class CarsModule {}