import { observedCars } from './../mockData';
import { AuthenticationService } from './authentication.service';
import { TypeCB, UserRating, RecentSeenCar, ObservedCar } from './../interfaces';
import { cars, brands, types, usersRatings, recentSeenCars } from '../mockData';
import { Car, BrandCB } from '../interfaces'
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { mergeMap, map, distinct, toArray, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MockService {

    constructor(private authService: AuthenticationService){}

    getAllCars():Observable<Car[]>{
        return of(cars)
    }

    getBrands():Observable<BrandCB[]>{
        return of(brands)
    }

    getTypes():Observable<TypeCB[]>{
        return of(types)
    }

    getUsersRatings():Observable<UserRating[]>{
        return of(usersRatings)
    }

    getRecentSeenCars():Observable<RecentSeenCar[]>{
        return of(recentSeenCars).pipe(
            map( (cars:RecentSeenCar[]) => {
                return cars.filter( (car:RecentSeenCar) => car.observedBy == this.authService.currentUserValue.id )
            })
        )
    }

    getObservedCars():Observable<ObservedCar[]>{
        return of(observedCars).pipe(
            map( (observed:ObservedCar[]) => {
                return observed.filter( obs => obs.userId == this.authService.currentUserValue.id)
            })
        )
    }

    setObservedCar(carId:any):Observable<ObservedCar>{
        let newId = Math.max.apply(Math, observedCars.map( obj => obj.id) ) + 1
        let observed:ObservedCar = {id:newId, userId:this.authService.currentUserValue.id, carId:carId.carId}
        observedCars.push(observed)

        return of(observed)
    }

    setNotObservedCar(obs:ObservedCar):Observable<ObservedCar[]>{
        let index:number = observedCars.findIndex( obj => (obj.userId == this.authService.currentUserValue.id && obj.carId == obs.carId))
        index != -1 ? observedCars.splice( index, 1) : null

        return of(observedCars).pipe(
            map( (observed:ObservedCar[]) => {
                return observed.filter( obs => obs.userId == this.authService.currentUserValue.id)
            })
        )
    }

}
