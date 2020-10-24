import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as statusActions from '../store/status/status.actions'

@Injectable({
    providedIn: 'root'
})
export class AuxiliarService {

    constructor(private store:Store) { }

    logout():void{
        this.store.dispatch(statusActions.setRecentSeenCarsLoaded({loaded:false}))
        this.store.dispatch(statusActions.setUserObservedCarsLoaded({loaded:false}))
    }
}
