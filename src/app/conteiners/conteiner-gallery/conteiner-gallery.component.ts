import { Component, OnInit } from '@angular/core';
import * as carsActions from '../../store/cars/cars.actions'
import * as brandsActions from '../../store/brands/brands.actions'
import * as typesActions from '../../store/types/types.actions'
import { Store, select } from '@ngrx/store';
import { StoreState } from 'src/app/store/models';
import { Car, BrandCB, TypeCB } from 'src/app/interfaces';
import { Observable, pipe, combineLatest, BehaviorSubject } from 'rxjs';
import * as carsSelectors from '../../store/cars/cars.selectors'
import * as brandsSelectors from '../../store/brands/brands.selectors'
import * as typeSelectors from '../../store/types/types.selectors'
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-conteiner-gallery',
    template:`
        <app-gallery [allCars]="allCars$" [brands]="brands$" [types]="types$"></app-gallery>
    `
})
export class ConteinerGalleryComponent implements OnInit {

    allCars$:Observable<Car[]> 
    brands$:Observable<BrandCB[]>
    types$:Observable<TypeCB[]>

    constructor( private store:Store<StoreState>){ }

    ngOnInit(): void {
        this.store.dispatch(carsActions.getAllCars())
        this.store.dispatch(brandsActions.getBrands())
        this.store.dispatch(typesActions.getTypes())

        this.allCars$ = this.store.pipe(select(carsSelectors.getAllCars))
        this.brands$ = this.store.pipe(select(brandsSelectors.getBrands))
        this.types$ = this.store.pipe(select(typeSelectors.getTypes))

        // it counts how many cars there are of the same brand 
        // and enters the number in the "count" property of brands
        this.brands$ = combineLatest([this.brands$, this.allCars$])
            .pipe(
                map( ([brands, cars]) => {
                    let brandsClone:BrandCB[] = []
                    brands.map( brand => {
                        let count = 0
                        cars.map( car => {
                            car.brand == brand.name ? count++ : null
                        })

                        brandsClone.push({...brand, count:count})

                    })

                    return brandsClone

                })
            )

        // it counts how many cars there are of the same type 
        // and enters the number in the "count" property of type
        this.types$ = combineLatest([this.types$, this.allCars$])
            .pipe(
                map( ([types, cars]) => {
                    let typesClone:TypeCB[] = []
                    types.map( type => {
                        let count = 0
                        cars.map( car => {
                            car.type == type.name ? count++ : null
                        })

                        typesClone.push({...type, count:count})

                    })

                    return typesClone

                })
            )

    }
            

}
