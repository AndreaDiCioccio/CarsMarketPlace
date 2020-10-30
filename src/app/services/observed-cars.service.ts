import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car, ObservedCar } from '../interfaces';

import * as allCarsActions from '../store/cars/cars.actions'

@Injectable({ providedIn: 'root' })
export class ObservedCarsService {

    constructor(private store:Store) { }

    // aggiorna la proprietà "observed" di allCars
    setObservedCars(allCars:Car[], userObservedCars:ObservedCar[]):void{

        let ac:Car[] = JSON.parse(JSON.stringify(allCars))

        ac.map( car => {
            // se la car è osservata, setta "observed" a true
            userObservedCars.some( obs => obs.carId == car.id) ? car.observed = true : car.observed = false

        })

        this.store.dispatch(allCarsActions.setCarsWithObserved({cars:ac}))

    }
}
