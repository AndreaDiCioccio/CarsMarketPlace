import { observedCars, buyedCars, cars, brands, types, usersRatings, recentSeenCars } from './../mockData';
import { AuthenticationService } from './authentication.service';
import { TypeCB, UserRating, RecentSeenCar, ObservedCar, User, BuyedCar } from './../interfaces';
import { Car, BrandCB } from '../interfaces'
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { map, } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

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

    setCarWithObserved(action:any):Observable<Car>{
        console.log('action', action)
        let index = cars.findIndex( car => car.id == action.car.id)
        cars[index] = action.car
        let jsonCar = JSON.parse(JSON.stringify(action.car))
        return of(jsonCar)
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
        return of(JSON.parse(JSON.stringify(usersRatings)))
    }

    addUserRating(rating:UserRating): Observable<UserRating> {
        let id:number = usersRatings.length
        let ratingObj:UserRating = {id:id, userId:rating.userId, value:rating.value}
        usersRatings.push(ratingObj)
        return of(ratingObj)
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

    setObservedCar(action:any):Observable<ObservedCar>{
        let user:User = this.authService.currentUserValue
        let newId = Math.max.apply(Math, observedCars.map( obj => obj.id) ) + 1
        let observed:ObservedCar = {id:newId, userId:user.id, carId:action.carId}
        observedCars.push(observed)

        return of(observed)
    }

    setNotObservedCar(action:any):Observable<ObservedCar[]>{
        let user:User = this.authService.currentUserValue
        let index:number = observedCars.findIndex( obj => (obj.userId == user.id && obj.carId == action.carId))
        index != -1 ? observedCars.splice( index, 1) : null

        return of(JSON.parse(JSON.stringify(observedCars))).pipe(
            map( (observed:ObservedCar[]) => {
                return observed.filter( obs => obs.userId == user.id)
            })
        )
    }
/* 
    removeObservedCars(cars:number[]):Observable<number[]>{
        let user:User = this.authService.currentUserValue
        cars.forEach( car => {
            let index:number
            observedCars.findIndex( obs => obs.carId == car && obs.userId == user.id)
        })

        return of(cars)
    }
 */
    getAllObservedCars():Observable<ObservedCar[]>{
        return of(JSON.parse(JSON.stringify(observedCars)))
    }

    getBuyedCars(): Observable<BuyedCar[]> {
        return of(JSON.parse(JSON.stringify(buyedCars)))
    }

    addBuyedCar(action:any): Observable<BuyedCar> {
        let user = this.authService.currentUserValue
        let id = buyedCars.length || 0
        let buyedCar = {id:id, userId:user.id, carId:action.carId}
        buyedCars.push(buyedCar)

        return of(buyedCar)
    }

}
