import { getAllObservedCars } from './../../store/allObservedCars/allObservedCars.actions';
import { setUsersRatingsLoaded } from './../../store/status/status.actions';
import { isStoreLoaded, isRecentSeenCarsLoaded } from './../../store/status/status.selectors';
import { takeUntil, tap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StoreState } from 'src/app/store/models';
import { Subject, Observable } from 'rxjs';

import * as userObservedCarsActions from '../../store/userObservedCars/userObservedCars.actions'
import * as userObservedCarsSelectors from '../../store/userObservedCars/userObservedCars.selectors'

import * as allObservedCarsActions from '../../store/allObservedCars/allObservedCars.actions'
import * as allObservedCarsSelectors from '../../store/allObservedCars/allObservedCars.selectors'

import * as statusActions from '../../store/status/status.actions'
import * as statusSelectors from '../../store/status/status.selectors'

import * as allCarsActions from '../../store/cars/cars.actions'
import * as allCarsSelectors from '../../store/cars/cars.selectors'

import * as usersRatingsActions from '../../store/users-ratings/users-ratings.actions'
import * as usersRatingsSelectors from '../../store/users-ratings/users-ratings.selectors'

import * as recentSeenCarsActions from '../../store/recentSeenCars/recentSeenCars.actions'
import * as recentSeenCarsSelectors from '../../store/recentSeenCars/recentSeenCars.selectors'

import { ObservedCar, Car, UserRating } from 'src/app/interfaces';

@Component({
    selector: 'app-container-observed-cars',
    template: `
        <app-observed-cars 
            [userObservedCars]="userObservedCars$ | async" 
            [allObservedCars]="allObservedCars$ | async"
            [allCars]="allCars$ | async"
            [usersRatings]="usersRatings$ | async"
            [recentSeenCars]="recentSeenCars$ | async"
            
            (removeSelectedCarsEvent)=onRemoveSelectedCars($event)>
        </app-observed-cars>
    `
})
export class ContainerObservedCarsComponent implements OnInit, OnDestroy {

    isStoreAllCarsLoaded:boolean = false
    isStoreUserObservedCarsLoaded:boolean = false
    isStoreAllObservedCarsLoaded:boolean = false
    isStoreUsersRatingsLoaded:boolean = false
    isStoreRecentSeenCarsLoaded:boolean = false

    allCars$:Observable<Car[]>
    userObservedCars$:Observable<ObservedCar[]>
    allObservedCars$:Observable<ObservedCar[]>
    usersRatings$:Observable<UserRating[]>
    recentSeenCars$:Observable<Car[]>

    unsubscription:Subject<boolean> = new Subject

    constructor(private store:Store<StoreState>) { }

    ngOnInit(): void {
        this.store.pipe(select(statusSelectors.isUserObservedCarsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreUserObservedCarsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isAllObservedCarsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreAllObservedCarsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isAllCarsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreAllCarsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isUsersRatingsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreUsersRatingsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isRecentSeenCarsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreRecentSeenCarsLoaded = loaded)

        if(!this.isStoreUserObservedCarsLoaded){
            this.store.dispatch(userObservedCarsActions.getUserObservedCars())
            this.store.dispatch(statusActions.setUserObservedCarsLoaded({loaded:true}))
        }

        if(!this.isStoreAllObservedCarsLoaded){
            this.store.dispatch(allObservedCarsActions.getAllObservedCars())
            this.store.dispatch(statusActions.setAllObservedCarsLoaded({loaded:true}))
        }

        if(!this.isStoreAllCarsLoaded){
            this.store.dispatch(allCarsActions.getAllCars())
            this.store.dispatch(statusActions.setAllCarsLoaded({loaded:true}))
        }

        if(!this.isStoreUsersRatingsLoaded){
            this.store.dispatch(usersRatingsActions.getUsersRatings())
            this.store.dispatch(statusActions.setUsersRatingsLoaded({loaded:true}))
        }

        if(!this.isStoreRecentSeenCarsLoaded){
            this.store.dispatch(recentSeenCarsActions.getRecentSeenCars())
            this.store.dispatch(statusActions.setRecentSeenCarsLoaded({loaded:true}))
        }

        this.userObservedCars$ = this.store.pipe(select(userObservedCarsSelectors.getUsersObservedCars))
        this.allObservedCars$ = this.store.pipe(select(allObservedCarsSelectors.getAllObservedCars))
        this.allCars$ = this.store.pipe(select(allCarsSelectors.getAllCars))
        this.usersRatings$ = this.store.pipe(select(usersRatingsSelectors.getUsersRatings))
        this.recentSeenCars$ = this.store.pipe(select(recentSeenCarsSelectors.getRecentSeenCars))

    }

    ngOnDestroy():void{
        this.unsubscription.next(true)
        this.unsubscription.complete()
    }

    onRemoveSelectedCars(cars):void{
        this.store.dispatch(userObservedCarsActions.removeSelectedCars({cars}))
    }

}
