import { TypeCB } from './../interfaces';
import { cars } from '../mockData';
import { Car, BrandCB } from '../interfaces'
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { mergeMap, map, distinct, toArray, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MockService {

    getAllCars():Observable<Car[]>{
        return of(cars)
    }

    getBrands():Observable<BrandCB[]>{
        return of(cars).pipe(
            mergeMap((cars:Car[]) => cars),
            map( (car:Car) => car.brand),
            distinct(),
            map( brand => ({id:Math.trunc(Math.random() * 1000), name:brand, checked:false, count:0}) ),
            toArray()        
        )
    }

    getTypes():Observable<TypeCB[]>{
        return of(cars).pipe(
            mergeMap((cars:Car[]) => cars),
            map( (car:Car) => car.type),
            distinct(),
            map( type => ({id:Math.trunc(Math.random() * 1000), name:type, checked:false, count:0}) ),
            toArray()        
        )
    }

}
