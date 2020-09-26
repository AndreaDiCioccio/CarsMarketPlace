import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as statusReducers from './reducers.status'

@NgModule({
    imports: [
        StoreModule.forFeature('status', statusReducers.reducer)
    ]
})

export class StatusModule {} 