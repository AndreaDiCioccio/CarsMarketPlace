import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import * as recentSeenCarReducers from './recentSeenCars.reducers'
import { RecentSeenCarsEffects } from './recentSeenCars.effects'


@NgModule({
    imports: [
        StoreModule.forFeature('recentSeenCars', recentSeenCarReducers.recentSeenCarsReducers),
        EffectsModule.forFeature([RecentSeenCarsEffects])
    ]
})

export class RecentSeenCarsModule {}