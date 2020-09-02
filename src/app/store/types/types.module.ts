import { TypesEffects } from "./types.effects";
import * as typesReducers from "./types.reducers";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        StoreModule.forFeature('types', typesReducers.typesReducers),
        EffectsModule.forFeature([TypesEffects])
    ]
})

export class TypesModule {}