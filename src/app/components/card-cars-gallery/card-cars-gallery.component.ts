import { AuxiliarService } from './../../services/auxiliar.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User, UserRating, Rating } from '../../interfaces';
import { carsImagesUrl } from '../../../environments/environment';
import { Car } from '../../interfaces';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter, IterableDiffers, IterableDiffer, DoCheck, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
    selector: 'app-card-cars-gallery',
    templateUrl: './card-cars-gallery.component.html',
    styleUrls: ['./card-cars-gallery.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardCarsGallery implements OnInit{

    @Input() car:Car
    @Input() usersRatings:UserRating[]
    @Input() parent:string

    @Output() setObservedCarAction = new EventEmitter<any>()
    @Output() setNotObservedCarAction = new EventEmitter<any>()

    carsImagesUrl = carsImagesUrl
    rating:Rating
    iterableDiffer:IterableDiffer<any>

    constructor(public authService:AuthenticationService, private auxiliarService:AuxiliarService){ }
 
    ngOnInit():void{
        this.rating = this.auxiliarService.getRating(this.usersRatings, this.car.userId)
    }


    selectUser(car:Car):User{
        return ({id:car.userId, username:car.username})
    }

    // filtra l'array di tutti i ratings solo con i ratings dell' utente che vende la car e ritorna un oggetto Rating calcolato
    calculateRating(usersRatings:UserRating[]):Rating{

        let userRatings = usersRatings.filter(userRating => userRating.userId == this.car.userId)

        let ratings:UserRating[] = userRatings
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
