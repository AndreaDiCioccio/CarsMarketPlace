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

import * as carsSelectors from '../../store/cars/cars.selectors'
import * as brandsSelectors from '../../store/brands/brands.selectors'
import * as typeSelectors from '../../store/types/types.selectors'
import * as userRatingsSelectors from '../../store/users-ratings/users-ratings.selectors'
import * as userRecentSeenCarsSelectors from '../../store/recentSeenCars/recentSeenCars.selectors'
import * as userObservedCarsSelectors from '../../store/observedCars/observedCars.selectors'
import { Subscription, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';




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
                    (setBrandCount)="onSetBrandCount($event)"
                    (setTypeCount)="onSetTypeCount($event)"
                    (setBrandChecked)="onSetBrandChecked($event)"
                    (setBrandsChecked)="onSetBrandsChecked($event)"
                    (setTypeChecked)="onSetTypeChecked($event)"
                    (setTypesChecked)="onSetTypesChecked($event)">
        </app-gallery>
    `
})
export class ConteinerGalleryComponent implements OnInit, OnDestroy {

    allCars$:Observable<Car[]>
    brands$:Observable<BrandCB[]>
    types$:Observable<TypeCB[]>
    usersRatings$:Observable<UserRating[]>
    recentSeenCars$:Observable<RecentSeenCar[]>
    observedCars$:Observable<ObservedCar[]>

    unsubscripion:Subject<boolean> = new Subject<boolean>()

    constructor( private store:Store<StoreState>, private authService:AuthenticationService){

    }

    ngOnDestroy(): void {
        this.unsubscripion.next(true)
        this.unsubscripion.complete()
    }

    ngOnInit(): void {

        this.store.dispatch(carsActions.getAllCars())
        this.store.dispatch(brandsActions.getBrands())
        this.store.dispatch(typesActions.getTypes())
        this.store.dispatch(userRatingsActions.getUsersRatings())
        this.authService.currentUserValue ? this.store.dispatch(recentSeenCarsActions.getRecentSeenCars()) : null
        this.authService.currentUserValue ? this.store.dispatch(observedCarsActions.getObservedCars()) : null

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

    onSetBrandCount(obj:BrandCB):void{

    }

    onSetTypeCount(obj:TypeCB):void{

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
