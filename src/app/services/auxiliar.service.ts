import { Store } from '@ngrx/store';
import { Injectable, Optional } from '@angular/core';
import { Rating, UserRating, User } from '../interfaces';

import * as statusActions from '../store/status/status.actions'


@Injectable({ providedIn: 'root'})
export class AuxiliarService {

    constructor(private  store:Store) { }

    logout(): void {
        this.store.dispatch(statusActions.setRecentSeenCarsLoaded({loaded:false}))
        this.store.dispatch(statusActions.setUserObservedCarsLoaded({loaded:false}))
    }

    // restituisce l' oggetto Rating di un user elaborato tramite l'array di tutti i ratings
    getRating(usersRatings:UserRating[], userId):Rating {

        let userRatings = usersRatings.filter(userRating => userRating.userId == userId)

        let ratings:UserRating[] = userRatings
        let rating:Rating = {value:null, count:null}
        rating.count = ratings.length
        rating.value = ratings.reduce( (acc, cur) => acc + cur.value, 0) / rating.count
         
        return rating
    }
}
