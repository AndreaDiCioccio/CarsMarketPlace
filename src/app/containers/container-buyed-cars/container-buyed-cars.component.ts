import { BuyedCar, Car, RecentSeenCar } from './../../interfaces';
import { takeUntil, map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

import * as buyedCarsActions from '../../store/buyedCars/buyedCars.actions'
import * as buyedCarsSelectors from '../../store/buyedCars/buyedCars.selectors'

import * as statusActions from '../../store/status/status.actions'
import * as statusSelectors from '../../store/status/status.selectors'

import * as allCarsActions from '../../store/cars/cars.actions'
import * as allCarsSelectors from '../../store/cars/cars.selectors'

import * as recentSeenCarsActions from '../../store/recentSeenCars/recentSeenCars.actions'
import * as recentSeenCarsSelectors from '../../store/recentSeenCars/recentSeenCars.selectors'

@Component({
    selector: 'app-container-buyed-cars',
    template: `
        <app-buyed-cars 
            [buyedCars]="buyedCars$ | async"
            [allCars]="allCars$ | async "
            [recentSeenCars]="recentSeenCars$ | async">
        </app-buyed-cars>
    `,
    styleUrls: ['./container-buyed-cars.component.css']
})
export class ContainerBuyedCarsComponent implements OnInit {

    isStoreBuyedCarsLoaded:boolean = false
    isAllCarsLoaded:boolean = false
    isRecentSeenCarsLoaded:boolean = false

    buyedCars$:Observable<BuyedCar[]>
    allCars$:Observable<Car[]>
    recentSeenCars$:Observable<RecentSeenCar[]>

    unsubscribe:Subject<boolean> = new Subject

    constructor(private store:Store, private authService:AuthenticationService) { }

    ngOnInit(): void {

        this.store.pipe(select(statusSelectors.isBuyedCarsLoaded))
            .pipe( takeUntil(this.unsubscribe))
            .subscribe( loaded => this.isStoreBuyedCarsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isAllCarsLoaded))
            .pipe( takeUntil(this.unsubscribe))
            .subscribe( loaded => this.isAllCarsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isRecentSeenCarsLoaded))
            .pipe( takeUntil(this.unsubscribe))
            .subscribe( loaded => this.isRecentSeenCarsLoaded = loaded)

        if(!this.isStoreBuyedCarsLoaded){
            this.store.dispatch(buyedCarsActions.getBuyedCars())
            this.store.dispatch(statusActions.setBuyedCarsLoaded({loaded:true}))
        }

        if(!this.isAllCarsLoaded){
            this.store.dispatch(allCarsActions.getAllCars())
            this.store.dispatch(statusActions.setAllCarsLoaded({loaded:true}))
        }

        if(!this.isRecentSeenCarsLoaded){
            this.store.dispatch(recentSeenCarsActions.getRecentSeenCars())
            this.store.dispatch(statusActions.setRecentSeenCarsLoaded({loaded:true}))
        }

        this.buyedCars$ = this.store.pipe(select(buyedCarsSelectors.getBuyedCars))
            .pipe(
                map( (cars:BuyedCar[]) => cars.filter( car => car.userId == this.authService.currentUserValue.id))
            )

        this.allCars$ = this.store.pipe(select(allCarsSelectors.getAllCars))

        this.recentSeenCars$ = this.store.pipe(select(recentSeenCarsSelectors.getRecentSeenCars))

    }

}
