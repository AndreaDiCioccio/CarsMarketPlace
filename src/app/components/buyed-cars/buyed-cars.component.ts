import { BuyedCar, Car, RecentSeenCar } from './../../interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { INIT } from '@ngrx/store';

@Component({
    selector: 'app-buyed-cars',
    template: `
        <div class="container">
            <div class="left-container">
                <app-recent-seen-cars class="recent-seen" [recentSeenCars]="recentSeenCars"></app-recent-seen-cars>
            </div>
            <div class="central-container">
                <div *ngIf="cars.length > 0; else noCars">
                    <div *ngFor="let car of cars">
                        <app-card-buyed-cars [car]="car"></app-card-buyed-cars>
                    </div>
                </div>
                <ng-template #noCars>
                    <h3>You didn't buy any car</h3>
                </ng-template>
            </div>
        </div>
    `,
    styleUrls: ['./buyed-cars.component.css']
})
export class BuyedCarsComponent implements OnInit{

    @Input() buyedCars:BuyedCar[]
    @Input() allCars:Car[]
    @Input() recentSeenCars:RecentSeenCar[]

    cars:Car[] = [] // usato nell' ngFor del template

    ngOnInit(): void {
        // popola l'array cars solo con le cars buyed
        this.allCars.forEach( car => {
            this.buyedCars.forEach( buyed => {
                car.id == buyed.carId ? this.cars.push(car) : null
            })
        })
    }
    
}
