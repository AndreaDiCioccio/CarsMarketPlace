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
                    [brands]="brands" 
                    [types]="types" 
                    [usersRatings]="usersRatings" 
                    [recentSeenCars]="recentSeenCars"
                    [observedCars]="observedCars"
                    
                    (setObservedCarAction)="onSetObservedCar($event)"
                    (setNotObservedCarAction)="onSetNotObservedCar($event)"
                    (setObservedCarsAction)="onSetObservedCars($event)">
        </app-gallery>
    `
})
export class ConteinerGalleryComponent implements OnInit, OnDestroy {

    allCars$:Observable<Car[]>
    brands:BrandCB[]
    types:TypeCB[]
    usersRatings:UserRating[]
    recentSeenCars:RecentSeenCar[]
    observedCars:ObservedCar[]

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
            /* 
            .pipe(
                takeUntil(this.unsubscripion)
            ).subscribe(
                cars => {
                    let jsonCars = JSON.stringify(cars)
                    this.allCars = JSON.parse(jsonCars)
                }
            )
 */
        

        this.store.pipe(select(brandsSelectors.getBrands))
            .pipe(
                takeUntil(this.unsubscripion)
            ).subscribe(
                brands => {
                    let jsonBrands = JSON.stringify(brands)
                    this.brands = JSON.parse(jsonBrands)
                }
            )

        

        this.store.pipe(select(typeSelectors.getTypes))
            .pipe(
                takeUntil(this.unsubscripion)
            ).subscribe(
                types => {
                    let jsonTypes = JSON.stringify(types)
                    this.types = JSON.parse(jsonTypes)
                }
            )

        

        this.store.pipe(select(userRatingsSelectors.getUsersRatings))
            .pipe(
                takeUntil(this.unsubscripion)
            ).subscribe(
                usersRatings => {
                    this.usersRatings = usersRatings
                }
            )

        

        this.store.pipe(select(userRecentSeenCarsSelectors.getUsers))
            .pipe(
                takeUntil(this.unsubscripion)
            ).subscribe(
                users => {
                    this.recentSeenCars = users
                }
            )

        

        this.store.pipe(select(userObservedCarsSelectors.getUsers))
            .pipe(
                takeUntil(this.unsubscripion)
            ).subscribe(
                users => {
                    let jsonUsers = JSON.stringify(users)
                    this.observedCars = JSON.parse(jsonUsers)
                }
            )

        

    }

    onSetObservedCar(carId:number):void{
        let observed:ObservedCar = {id:null, carId:carId, userId:null}
        this.store.dispatch(observedCarsActions.setObservedCar({carId}))
    }

    onSetNotObservedCar(carId:number):void{
        this.store.dispatch(observedCarsActions.setNotObservedCar({carId}))
    }

    onSetObservedCars(cars:Car[]){
        this.store.dispatch(carsActions.setCarsWithObserved({cars}))
    }

}
