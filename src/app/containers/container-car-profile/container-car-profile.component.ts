import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car, UserRating, ObservedCar } from 'src/app/interfaces';
import { Store, select } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'

import * as allCarsSelectors from '../../store/cars/cars.selectors'
import * as allCarsActions from '../../store/cars/cars.actions'

import * as statusSelectors from '../../store/status/status.selectors'
import * as statusActions from '../../store/status/status.actions'

import * as usersRatingsSelectors from '../../store/users-ratings/users-ratings.selectors'
import * as usersRatingsActions from '../../store/users-ratings/users-ratings.actions'

import * as userObservedCarsActions from '../../store/userObservedCars/userObservedCars.actions'
import * as userObservedCarsSelectors from '../../store/userObservedCars/userObservedCars.selectors'

@Component({
    selector: 'app-container-car-profile',
    template: `
        <app-car-profile [cars]="allCars$ | async"
                        [usersRatings]="usersRatings$ | async"
                        [userObservedCars]="userObservedCars$ | async"
                        (setObservedCarAction)="onSetObservedCar($event)"
                        (setNotObservedCarAction)="onSetNotObservedCar($event)">
        </app-car-profile>
    `,
    styleUrls: ['./container-car-profile.component.css']
})
export class ContainerCarProfileComponent implements OnInit, OnDestroy {

    allCars$:Observable<Car[]>
    usersRatings$:Observable<UserRating[]>
    userObservedCars$:Observable<ObservedCar[]>

    unsubscription:Subject<boolean> = new Subject

    isStoreAllCarsLoaded:boolean = false
    isStoreUsersRatingsLoaded:boolean = false
    isStoreUserObservedCarsLoaded:boolean = false
    carId:number

    constructor( private store:Store, private route: ActivatedRoute, private authService:AuthenticationService) { }

    ngOnInit(): void {

        this.route.paramMap
            .pipe(
                map( (params:ParamMap) => params.get('carId') ),
                take(1)
            ).subscribe(
                carId => this.carId = Number(carId)
            )

        this.store.pipe(select(statusSelectors.isAllCarsLoaded))
            .pipe( take(1) )
            .subscribe( loaded => this.isStoreAllCarsLoaded = loaded )

        this.store.pipe(select(statusSelectors.isUsersRatingsLoaded))
                .pipe( take(1) )
                .subscribe( loaded => this.isStoreUsersRatingsLoaded = loaded)

        this.store.pipe(select(statusSelectors.isUserObservedCarsLoaded))
                .pipe( take(1) )
                .subscribe( loaded => this.isStoreUserObservedCarsLoaded = loaded)

        if(!this.isStoreAllCarsLoaded) {
            this.store.dispatch(allCarsActions.getAllCars())
            this.store.dispatch(statusActions.setUsersRatingsLoaded({loaded:true}))
        }

        if(!this.isStoreUsersRatingsLoaded) {
            this.store.dispatch(usersRatingsActions.getUsersRatings())
            this.store.dispatch(statusActions.setUsersRatingsLoaded({loaded:true}))
        }

        if(!this.isStoreUserObservedCarsLoaded && this.authService.currentUserValue){
            this.store.dispatch(userObservedCarsActions.getUserObservedCars())
            this.store.dispatch(statusActions.setUserObservedCarsLoaded({loaded:true}))
        }

        this.allCars$ = this.store.pipe(select(allCarsSelectors.getAllCars))
            .pipe( map( cars => cars.filter( car => car.id == this.carId)) )
        this.usersRatings$ = this.store.pipe(select(usersRatingsSelectors.getUsersRatings))
        this.userObservedCars$ = this.store.pipe(select(userObservedCarsSelectors.getUsersObservedCars))

    }

    ngOnDestroy(): void {
        this.unsubscription.next(true)
        this.unsubscription.complete()
    }

    onSetObservedCar(carId:number): void {
        this.store.dispatch(userObservedCarsActions.setObservedCar({carId}))
    }

    onSetNotObservedCar(carId:number): void {
        this.store.dispatch(userObservedCarsActions.setNotObservedCar({carId}))
    }

}
