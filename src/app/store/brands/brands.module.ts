import { BrandsEffects } from "./brands.effects";
import * as brandsReducers from "./brands.reducers";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        StoreModule.forFeature('brands', brandsReducers.brandsReducers),
        EffectsModule.forFeature([BrandsEffects])
    ]
})

export class BrandsModule {}