import { AuthenticationService } from './../../services/authentication.service';
import { User, UserRating, Rating } from './../../interfaces';
import { carsImagesUrl } from '../../../environments/environment';
import { Car } from '../../interfaces';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter, IterableDiffers, IterableDiffer, DoCheck, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
    selector: 'app-car-card-gallery',
    templateUrl: './car-card-gallery.component.html',
    styleUrls: ['./car-card-gallery.component.css']
})
export class CarCardGalleryComponent implements OnInit, OnChanges{

    @Input() car:Car
    @Input() usersRatings:UserRating[]
    @Input() parent:string

    @Output() setObservedCarAction = new EventEmitter<any>()
    @Output() setNotObservedCarAction = new EventEmitter<any>()

    carsImagesUrl = carsImagesUrl
    rating:Rating
    iterableDiffer:IterableDiffer<any>

    constructor(public authService:AuthenticationService){ }

    ngOnChanges(changes: SimpleChanges): void {
        //console.log('card changes', changes)
    }
 
    ngOnInit():void{
        this.rating = this.addRating(this.usersRatings)
    }


    selectUser(car:Car):User{
        return ({id:car.userId, username:car.username})
    }

    addRating(usersRatings:UserRating[]):Rating{

        usersRatings = usersRatings.filter(userRating => userRating.userId == this.car.userId)

        let ratings:UserRating[] = usersRatings
        let rating:Rating = {value:null, count:null}
        rating.count = ratings.length
        rating.value = ratings.reduce( (acc, cur) => acc + cur.value, 0) / rating.count
         
        return rating
    }

    setObserved(carId:number):void{
        this.setObservedCarAction.emit(carId)
    }

    setNotObserved(carId:number):void{
        this.setNotObservedCarAction.emit(carId)
    }

}
