import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Car, User, RecentSeenCar } from 'src/app/interfaces';
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
            //this.usersRecentSeenCars = this.usersRecentSeenCars.filter( user => user.id == this.user.id)
            //let doubleArray = this.usersRecentSeenCars.map( user => user. )
            //this.cars = doubleArray[0]
            
            // remove multiple cars in the array,
            // take just one for id
            this.cars = this.recentSeenCars.filter((v,i,a) => a.findIndex ( t => (t.id === v.id))===i)
        }
    }

}
