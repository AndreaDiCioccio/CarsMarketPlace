import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import * as buyedCarsReducers from './buyedCars.reducers'
import { BuyedCarsEffects } from "./buyedCars.effects";


@NgModule({
    imports: [
        StoreModule.forFeature('buyedCars', buyedCarsReducers.buyedCarsReducers),
        EffectsModule.forFeature([BuyedCarsEffects])
    ]
})

export class BuyedCarsModule {}