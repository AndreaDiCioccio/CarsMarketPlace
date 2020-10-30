import { UserRating } from '../../interfaces';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { takeUntil, map, take, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Car } from '../../interfaces'

import * as statusSelectors from '../../store/status/status.selectors'
import * as statusActions from '../../store/status/status.actions'

import * as allCarsSelectors from '../../store/cars/cars.selectors'
import * as allCarsActions from '../../store/cars/cars.actions'

import * as usersRatingsActions from '../../store/users-ratings/users-ratings.actions'

import * as buyedCarsActions from '../../store/buyedCars/buyedCars.actions'

@Component({
    selector: 'app-container-buy',
    template: `
        <app-buy [allCars]="allCars$ | async"
            (addRating)="addRating($event)"
            (buyedCar)="addBuyedCar($event)">
        </app-buy>
    `
})
export class ContainerBuyComponent implements OnInit, OnDestroy {

    allCars$:Observable<Car[]>

    unsubscription:Subject<boolean> = new Subject

    isStoreAllCarsLoaded:boolean = false
    carId:number

    constructor(private store:Store, private route:ActivatedRoute) { }

    ngOnInit(): void {

        this.route.paramMap
            .pipe(
                map( (params:ParamMap) => params.get('carId') ),
                take(1)
            ).subscribe(
                carId => this.carId = Number(carId)
            )

        this.store.select(statusSelectors.isAllCarsLoaded)
            .pipe( takeUntil(this.unsubscription))
            .subscribe( loaded => this.isStoreAllCarsLoaded = loaded)

        if(!this.isStoreAllCarsLoaded){
            this.store.dispatch(allCarsActions.getAllCars())
            this.store.dispatch(statusActions.setAllCarsLoaded({loaded:true}))
        }

        this.allCars$ = this.store.pipe(select(allCarsSelectors.getAllCars))
            .pipe( 
                map( cars => cars.filter( car => car.id == this.carId))
            )

    }

    addRating(rating:UserRating): void {
        this.store.dispatch(usersRatingsActions.addRating({rating:{id:rating.id, userId:rating.userId, value:rating.value}}))
    }

    addBuyedCar(carId:number): void {
        this.store.dispatch(buyedCarsActions.addBuyedCar({carId}))
    }

    ngOnDestroy(): void {
        this.unsubscription.next(true)
        this.unsubscription.complete()
    }

}
