import { recentSeenCars } from './../../mockData';
import { carsImagesUrl } from './../../../environments/environment';
import { ObservedCar, Car, CarWithCount, UserRating } from './../../interfaces';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'app-observed-cars',
    template: `
        <h2>Your Observed Cars</h2>
        <div class="container">
            <div class="left-container">
                <app-recent-seen-cars class="recent-seen" [recentSeenCars]="recentSeenCars"></app-recent-seen-cars>
            </div>
            <div class="central-container">
                <button class="btn-remove-observed-cars" (click)="removeSelectedCars(carsToDelete)">remove selected cars</button>
                <app-card-observed-cars *ngFor="let car of observedCars"
                    [usersRatings]="usersRatings"
                    [car]="car"
                    (SetObervedNotObserved)="onSetObservedNotObserved($event)">
                </app-card-observed-cars>    
            </div>
        </div>
    `,
    styleUrls: ['./observed-cars.component.css']
})
export class ObservedCarsComponent implements OnChanges {

    observedCars:CarWithCount[]

    carsImagesUrl = carsImagesUrl

    carsToDelete:number[] = []

    @Input() userObservedCars:ObservedCar[]
    @Input() allObservedCars:ObservedCar[]
    @Input() allCars:CarWithCount[]
    @Input() usersRatings:UserRating[]
    @Input() recentSeenCars:Car[]

    @Output() removeSelectedCarsEvent = new EventEmitter<number[]>()

    ngOnChanges(): void{
        this.observedCars = this.allCars.filter( car => {
            return this.allObservedCars.find( obs => obs.carId == car.id)
        })

        this.observedCars = this.filterObservedCars(this.observedCars, this.userObservedCars)

        this.observedCars = this.addCount(this.observedCars, this.allObservedCars)
    }

    filterObservedCars(observedCars:CarWithCount[], userObservedCars:ObservedCar[]):CarWithCount[]{
        return observedCars.filter( car => userObservedCars.find( obs => obs.carId == car.id))
    }

    onSetObservedNotObserved(obj:{carId:number, checked:boolean}){

        obj.checked ? this.carsToDelete.push(obj.carId) : this.carsToDelete = this.carsToDelete.filter( num => num != obj.carId);

    }

    addCount(observedCars:CarWithCount[], allObservedCars:ObservedCar[]): CarWithCount[]{

        observedCars = observedCars.map( obs => {
            let count = 0
            allObservedCars.forEach( allObs => {
                allObs.carId == obs.id ? count++ : null
            })
            return {...obs, count:count}
        })

        return observedCars
    }

    removeSelectedCars(carsIds): void{
        this.carsToDelete = []
        this.removeSelectedCarsEvent.emit(carsIds)
    }
}
