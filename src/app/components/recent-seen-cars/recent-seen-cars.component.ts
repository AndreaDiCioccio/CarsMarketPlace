import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Car, User, RecentSeenCar } from '../../interfaces';
import { carsImagesUrl } from '../../../environments/environment'

@Component({
    selector: 'app-recent-seen-cars',
    templateUrl: './recent-seen-cars.component.html',
    styleUrls: ['./recent-seen-cars.component.css']
})
export class RecentSeenCarsComponent implements OnInit {

    @Input() recentSeenCars:RecentSeenCar[]

    user:User
    cars:Car[]
    carsImagesUrl = carsImagesUrl
    
    constructor(public authService:AuthenticationService) { }

    ngOnInit(): void {
        this.user = this.authService.currentUserValue
        if(this.user){
            this.cars = this.recentSeenCars.filter( (car, i, arr) => arr.findIndex ( el => (el.id === car.id) ) === i )
        }
    }

}
