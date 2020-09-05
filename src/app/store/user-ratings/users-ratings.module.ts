import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import * as usersRatingsReducers from "./users-ratings.reducers";
import { UsersRatingsEffects } from "./users-ratings.effects";

@NgModule({
    imports: [
        StoreModule.forFeature('usersRatings', usersRatingsReducers.usersRatingsReducers),
        EffectsModule.forFeature([UsersRatingsEffects])
    ]
})

export class UsersRatingsModule {}