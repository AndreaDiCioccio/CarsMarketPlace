import { TypeCB, UserRatings } from './../interfaces';
import { cars, brands, types, usersAndMore } from '../mockData';
import { Car, BrandCB } from '../interfaces'
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { mergeMap, map, distinct, toArray, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MockService {

    getAllCars():Observable<Car[]>{
        return of(cars)
    }

    getBrands():Observable<BrandCB[]>{
        return of(brands)
    }

    getTypes():Observable<TypeCB[]>{
        return of(types)
    }

    getUsersRatings():Observable<UserRatings[]>{
        return of(usersAndMore).pipe(
            map( (users:any) => {
                return users.map( user => ({userId:user.id, ratings:user.ratings}))
            })
        )
    }
}
