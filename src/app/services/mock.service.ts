import { observedCars } from './../mockData';
import { AuthenticationService } from './authentication.service';
import { TypeCB, UserRating, RecentSeenCar, ObservedCar, User } from './../interfaces';
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
        let jsonCars = JSON.parse(JSON.stringify(cars))
        return of(jsonCars)
    }

    setCarsWithObserved(carsWithObserved:any):Observable<Car[]>{
        cars.splice(0, cars.length)
        carsWithObserved.cars.forEach( car => cars.push(car))
        let jsonCars = JSON.parse(JSON.stringify(cars))
        return of(jsonCars)
    }

    getBrands():Observable<BrandCB[]>{
        let jsonBrands = JSON.parse(JSON.stringify(brands))
        return of(jsonBrands)
    }

    setBrandChecked(brand:BrandCB):Observable<BrandCB>{
        brands.map( b => b.id == brand.id ? b.checked = brand.checked : null)
        return of(brand['brand'])
    }

    setBrandsChecked(bs:BrandCB[]):Observable<BrandCB[]>{
        brands.splice(0, brands.length)
        bs['brands'].forEach(brand => brands.push(brand))
        let jsonBrands = JSON.parse(JSON.stringify(brands))
        return of(jsonBrands)
    }

    getTypes():Observable<TypeCB[]>{
        let jsonTypes = JSON.parse(JSON.stringify(types))
        return of(jsonTypes)
    }

    setTypeChecked(type:TypeCB):Observable<TypeCB>{
        types.map( t => t.id == type.id ? t.checked = type.checked : null)
        return of(type['typee'])
    }

    setTypesChecked(ts:TypeCB[]):Observable<TypeCB[]>{
        types.splice(0, types.length)
        ts['types'].forEach(type => types.push(type))
        let jsonTypes = JSON.parse(JSON.stringify(types))
        return of(jsonTypes)
    }

    getUsersRatings():Observable<UserRating[]>{
        return of(usersRatings)
    }

    getRecentSeenCars():Observable<RecentSeenCar[]>{
        let user:User = this.authService.currentUserValue
        return of(recentSeenCars).pipe(
            map( (cars:RecentSeenCar[]) => {
                return cars.filter( (car:RecentSeenCar) => car.observedBy == user.id )
            })
        )
    }

    getUserObservedCars():Observable<ObservedCar[]>{
        return of(observedCars).pipe(
            map( (observed:ObservedCar[]) => {
                return observed.filter( obs => obs.userId == this.authService.currentUserValue.id)
            })
        )
    }

    setObservedCar(carId:any):Observable<ObservedCar>{
        let user:User = this.authService.currentUserValue
        let newId = Math.max.apply(Math, observedCars.map( obj => obj.id) ) + 1
        let observed:ObservedCar = {id:newId, userId:user.id, carId:carId.carId}
        observedCars.push(observed)

        return of(observed)
    }

    setNotObservedCar(obs:ObservedCar):Observable<ObservedCar[]>{
        let user:User = this.authService.currentUserValue
        let index:number = observedCars.findIndex( obj => (obj.userId == user.id && obj.carId == obs.carId))
        index != -1 ? observedCars.splice( index, 1) : null

        return of(JSON.parse(JSON.stringify(observedCars))).pipe(
            map( (observed:ObservedCar[]) => {
                return observed.filter( obs => obs.userId == user.id)
            })
        )
    }

    removeObservedCars(cars:number[]):Observable<number[]>{
        let user:User = this.authService.currentUserValue
        cars.forEach( car => {
            let index:number
            observedCars.findIndex( obs => obs.carId == car && obs.userId == user.id)
        })

        return of(cars)
    }

    getAllObservedCars():Observable<ObservedCar[]>{
        return of(JSON.parse(JSON.stringify(observedCars)))
    }

}
