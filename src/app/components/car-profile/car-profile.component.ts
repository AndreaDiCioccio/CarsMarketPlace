import { carsImagesUrl } from './../../../environments/environment';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Car, UserRating, Rating, ObservedCar } from '../../interfaces';
import { AuxiliarService } from '../../services/auxiliar.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-car-profile',
    templateUrl: './car-profile.component.html',
    styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit, OnChanges{

    @Input() set cars(cars:Car[]) {
        cars.forEach( car => this.car = {...car})
    }
    @Input() set usersRatings(usersRatings:UserRating[]) {
        this.rating = this.auxiliaService.getRating(usersRatings, this.car.userId)
    }
    @Input() userObservedCars:ObservedCar[]

    @Output() setObservedCarAction = new EventEmitter<number>()
    @Output() setNotObservedCarAction = new EventEmitter<number>()
    
    car:Car
    rating:Rating

    carsImagesUrl = carsImagesUrl

    constructor(private auxiliaService:AuxiliarService, public authService:AuthenticationService) {}

    ngOnInit(): void {
        if(this.authService.currentUserValue)
            this.car = this.setObservedCar(this.car, this.userObservedCars)
    }

    ngOnChanges(changes: SimpleChanges): void {
        if( changes.userObservedCars) {
            if(!changes.userObservedCars.firstChange && this.authService.currentUserValue) {
                this.car = this.setObservedCar(this.car, this.userObservedCars)
            }
        }
    }    

    setObservedCar(car:Car, userObservedCars:ObservedCar[]):Car{
        let observedCars:ObservedCar[] = [...userObservedCars]
        // se la car è osservata, setta "observed" a true
        observedCars.some( obs => obs.carId == car.id ? car.observed = true : car.observed = false)

        return car

    }

    setObserved(carId:number):void{
        this.setObservedCarAction.emit(carId)
    }

    setNotObserved(carId:number):void{
        this.setNotObservedCarAction.emit(carId)
    }

    
}
