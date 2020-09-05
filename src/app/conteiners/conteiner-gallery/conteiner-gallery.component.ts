import { Component, OnInit } from '@angular/core';
import * as carsActions from '../../store/cars/cars.actions'
import * as brandsActions from '../../store/brands/brands.actions'
import * as typesActions from '../../store/types/types.actions'
import * as usersRatingsActions from '../../store/user-ratings/users-ratings.actions'
import { Store, select } from '@ngrx/store';
import { StoreState } from 'src/app/store/models';
import { Car, BrandCB, TypeCB, UserRatings } from 'src/app/interfaces';
import * as carsSelectors from '../../store/cars/cars.selectors'
import * as brandsSelectors from '../../store/brands/brands.selectors'
import * as typeSelectors from '../../store/types/types.selectors'
import * as usersRatingsSelectors from '../../store/user-ratings/users-ratings.selectors'

@Component({
    selector: 'app-conteiner-gallery',
    template:`
        <app-gallery [allCars]="allCars" [brands]="brands" [types]="types" [usersRatings]="usersRatings"></app-gallery>
    `
})
export class ConteinerGalleryComponent implements OnInit {

    allCars:Car[] 
    brands:BrandCB[]
    types:TypeCB[]
    usersRatings:UserRatings[]

    constructor( private store:Store<StoreState>){ }

    ngOnInit(): void {
        this.store.dispatch(carsActions.getAllCars())
        this.store.dispatch(brandsActions.getBrands())
        this.store.dispatch(typesActions.getTypes())
        this.store.dispatch(usersRatingsActions.getUsersRatings())

        this.store.pipe(select(carsSelectors.getAllCars)).subscribe(
            cars => {
                this.allCars = [...cars]
            }
        )
        this.store.pipe(select(brandsSelectors.getBrands)).subscribe(
            brands => {
                let jsonBrands = JSON.stringify(brands)
                this.brands = JSON.parse(jsonBrands)
            }
        )
        this.store.pipe(select(typeSelectors.getTypes)).subscribe(
            types => {
                let jsonTypes = JSON.stringify(types)
                this.types = JSON.parse(jsonTypes)
            }
        )

        this.store.pipe(select(usersRatingsSelectors.getUsersRatings)).subscribe(
            usersRatings => {
                this.usersRatings = usersRatings
            }
        )

    }

}
