import { takeUntil, tap } from 'rxjs/operators';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StoreState } from 'src/app/store/models';
import { Car, BrandCB, TypeCB, ObservedCar, RecentSeenCar, UserRating } from 'src/app/interfaces';

import * as carsActions from '../../store/cars/cars.actions'
import * as brandsActions from '../../store/brands/brands.actions'
import * as typesActions from '../../store/types/types.actions'
import * as userRatingsActions from '../../store/users-ratings/users-ratings.actions'
import * as recentSeenCarsActions from '../../store/recentSeenCars/recentSeenCars.actions'
import * as observedCarsActions from '../../store/observedCars/observedCars.actions'
import * as statusActions from '../../store/status/actions.status'

import * as carsSelectors from '../../store/cars/cars.selectors'
import * as brandsSelectors from '../../store/brands/brands.selectors'
import * as typeSelectors from '../../store/types/types.selectors'
import * as userRatingsSelectors from '../../store/users-ratings/users-ratings.selectors'
import * as userRecentSeenCarsSelectors from '../../store/recentSeenCars/recentSeenCars.selectors'
import * as userObservedCarsSelectors from '../../store/observedCars/observedCars.selectors'
import * as statusSelectors from '../../store/status/selectors.status'

import { Subject, Observable } from 'rxjs';





@Component({
    selector: 'app-conteiner-gallery',
    template:`
        <app-gallery [allCars]="allCars$ | async" 
                    [brands]="brands$ | async" 
                    [types]="types$ | async" 
                    [usersRatings]="usersRatings$ | async" 
                    [recentSeenCars]="recentSeenCars$ | async"
                    [observedCars]="observedCars$ | async"
                    
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

export class ConteinerGalleryComponent implements OnInit, OnDestroy{

    allCars$:Observable<Car[]>
    brands$:Observable<BrandCB[]>
    types$:Observable<TypeCB[]>
    usersRatings$:Observable<UserRating[]>
    recentSeenCars$:Observable<RecentSeenCar[]>
    observedCars$:Observable<ObservedCar[]>

    unsubscription$:Subject<boolean> = new Subject

    isStoreLoaded:boolean = false
    isStoreRecentSeenCarsLoaded:boolean = false

    constructor( private store:Store<StoreState>, private authService:AuthenticationService){}

    ngOnDestroy():void{
        this.unsubscription$.next(true)
        this.unsubscription$.complete()
    }

    ngOnInit(): void {

        this.store.pipe(select(statusSelectors.isStoreLoaded))
            .pipe( takeUntil(this.unsubscription$))
            .subscribe( loaded => this.isStoreLoaded = loaded)

        this.store.pipe(select(statusSelectors.isRecentSeenCarsLoaded))
            .pipe(takeUntil(this.unsubscription$))
            .subscribe( loaded => this.isStoreRecentSeenCarsLoaded = loaded)

        !this.isStoreLoaded ? this.store.dispatch(carsActions.getAllCars()) : null
        !this.isStoreLoaded ? this.store.dispatch(brandsActions.getBrands()) : null
        !this.isStoreLoaded ? this.store.dispatch(typesActions.getTypes()) : null
        !this.isStoreLoaded ? this.store.dispatch(userRatingsActions.getUsersRatings()) : null

        if(!this.isStoreRecentSeenCarsLoaded && this.authService.currentUserValue){
            this.store.dispatch(recentSeenCarsActions.getRecentSeenCars())
            this.store.dispatch(statusActions.setRecentSeenCarsLoaded({loaded:true}))
        }

        if(!this.isStoreLoaded)
            this.authService.currentUserValue ? this.store.dispatch(observedCarsActions.getObservedCars()) : null

        this.store.dispatch(statusActions.setStoreLoaded({loaded:true}))

        this.allCars$ = this.store.pipe(select(carsSelectors.getAllCars))
           
        this.brands$ = this.store.pipe(select(brandsSelectors.getBrands))
            
        this.types$ = this.store.pipe(select(typeSelectors.getTypes))
        
        this.usersRatings$ = this.store.pipe(select(userRatingsSelectors.getUsersRatings))

        this.recentSeenCars$ = this.store.pipe(select(userRecentSeenCarsSelectors.getUsers))

        this.observedCars$ = this.store.pipe(select(userObservedCarsSelectors.getUsers))
            
    }

    onSetObservedCar(carId:number):void{
        let observed:ObservedCar = {id:null, carId:carId, userId:null}
        this.store.dispatch(observedCarsActions.setObservedCar({carId}))
    }

    onSetNotObservedCar(carId:number):void{
        this.store.dispatch(observedCarsActions.setNotObservedCar({carId}))
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

    public logout():void{
        this.store.dispatch(statusActions.setRecentSeenCarsLoaded({loaded:false}))
    }
}
