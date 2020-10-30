import { getRecentSeenCars } from './../../store/recentSeenCars/recentSeenCars.actions';
import { isUserObservedCarsLoaded, isAllCarsLoaded } from './../../store/status/status.selectors';
import { takeUntil, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StoreState } from '../../store/models';
import { Car, BrandCB, TypeCB, ObservedCar, RecentSeenCar, UserRating } from '../../interfaces';

import * as carsActions from '../../store/cars/cars.actions'
import * as brandsActions from '../../store/brands/brands.actions'
import * as typesActions from '../../store/types/types.actions'
import * as usersRatingsActions from '../../store/users-ratings/users-ratings.actions'
import * as recentSeenCarsActions from '../../store/recentSeenCars/recentSeenCars.actions'
import * as userObservedCarsActions from '../../store/userObservedCars/userObservedCars.actions'
import * as statusActions from '../../store/status/status.actions'

import * as carsSelectors from '../../store/cars/cars.selectors'
import * as brandsSelectors from '../../store/brands/brands.selectors'
import * as typeSelectors from '../../store/types/types.selectors'
import * as userRatingsSelectors from '../../store/users-ratings/users-ratings.selectors'
import * as userRecentSeenCarsSelectors from '../../store/recentSeenCars/recentSeenCars.selectors'
import * as userObservedCarsSelectors from '../../store/userObservedCars/userObservedCars.selectors'
import * as statusSelectors from '../../store/status/status.selectors'

import { Subject, Observable } from 'rxjs';

@Component({
    selector: 'app-container-gallery',
    template:`
        <app-gallery [allCars]="allCars$ | async" 
                    [brands]="brands$ | async" 
                    [types]="types$ | async" 
                    [usersRatings]="usersRatings$ | async" 
                    [recentSeenCars]="recentSeenCars$ | async"
                    [userObservedCars]="userObservedCars$ | async"
                    
                    (setObservedCarAction)="onSetObservedCar($event)"
                    (setNotObservedCarAction)="onSetNotObservedCar($event)"
                    (setObservedCarsAction)="onSetObservedCars($event)"
                    (setBrandChecked)="onSetBrandChecked($event)"
                    (setBrandsChecked)="onSetBrandsChecked($event)"
                    (setTypeChecked)="onSetTypeChecked($event)"
                    (setTypesChecked)="onSetTypesChecked($event)">
        </app-gallery>
    `
})

export class ContainerGalleryComponent implements OnInit, OnDestroy{

    allCars$:Observable<Car[]>
    brands$:Observable<BrandCB[]>
    types$:Observable<TypeCB[]>
    usersRatings$:Observable<UserRating[]>
    recentSeenCars$:Observable<RecentSeenCar[]>
    userObservedCars$:Observable<ObservedCar[]>

    unsubscription:Subject<boolean> = new Subject

    isStoreLoaded:boolean = false
    isAllCarsLoaded:boolean = false
    isStoreRecentSeenCarsLoaded:boolean = false
    isStoreObservedCarsLoaded:boolean = false
    isStoreUsersRatingsLoaded:boolean = false

    constructor( private store:Store<StoreState>, private authService:AuthenticationService){}

    ngOnDestroy():void{
        this.unsubscription.next(true)
        this.unsubscription.complete()
    }

    ngOnInit(): void {

        this.store.pipe(select(statusSelectors.isStoreLoaded))
            .pipe( takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreLoaded = loaded)

        this.store.pipe(select(statusSelectors.isRecentSeenCarsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreRecentSeenCarsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isUserObservedCarsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreObservedCarsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isUsersRatingsLoaded))
            .pipe(takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreUsersRatingsLoaded = loaded)

        if(!this.isStoreLoaded){
            this.store.dispatch(brandsActions.getBrands())
            this.store.dispatch(typesActions.getTypes())
            
            this.store.dispatch(statusActions.setStoreLoaded({loaded:true}))
        }

        if(!this.isAllCarsLoaded) {
            this.store.dispatch(carsActions.getAllCars())
            this.store.dispatch(statusActions.setAllCarsLoaded({loaded:true}))
        }

        if(!this.isStoreUsersRatingsLoaded){
            this.store.dispatch(usersRatingsActions.getUsersRatings())
            this.store.dispatch(statusActions.setUsersRatingsLoaded({loaded:true}))
        }

        if(!this.isStoreRecentSeenCarsLoaded && this.authService.currentUserValue){
            this.store.dispatch(recentSeenCarsActions.getRecentSeenCars())
            this.store.dispatch(statusActions.setRecentSeenCarsLoaded({loaded:true}))
        }

        if(!this.isStoreObservedCarsLoaded)
            this.authService.currentUserValue ? this.store.dispatch(userObservedCarsActions.getUserObservedCars()) : null

        this.allCars$ = this.store.pipe(select(carsSelectors.getAllCars))
           
        this.brands$ = this.store.pipe(select(brandsSelectors.getBrands))
            
        this.types$ = this.store.pipe(select(typeSelectors.getTypes))
        
        this.usersRatings$ = this.store.pipe(select(userRatingsSelectors.getUsersRatings))

        this.recentSeenCars$ = this.store.pipe(select(userRecentSeenCarsSelectors.getRecentSeenCars))

        this.userObservedCars$ = this.store.pipe(select(userObservedCarsSelectors.getUsersObservedCars))
                        
    }

    onSetObservedCar(carId:number):void{
        this.store.dispatch(userObservedCarsActions.setObservedCar({carId}))
    }

    onSetNotObservedCar(carId:number):void{
        this.store.dispatch(userObservedCarsActions.setNotObservedCar({carId}))
    }

    onSetObservedCars(cars:Car[]):void{
        this.store.dispatch(carsActions.setCarsWithObserved({cars}))
    }

    onSetBrandChecked(brand:BrandCB):void{
        this.store.dispatch(brandsActions.setBrandChecked({brand}))
    }

    onSetBrandsChecked(brands:BrandCB[]):void{
        this.store.dispatch(brandsActions.setBrandsChecked({brands}))
    }

    onSetTypeChecked(typee:TypeCB):void{
        this.store.dispatch(typesActions.setTypeChecked({typee}))
    }

    onSetTypesChecked(types:TypeCB[]):void{
        this.store.dispatch(typesActions.setTypesChecked({types}))
    }

}
