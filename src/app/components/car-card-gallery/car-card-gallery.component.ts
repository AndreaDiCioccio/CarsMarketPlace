import { ratings } from './../../mockData';
import { User, UserRatings } from './../../interfaces';
import { carsImagesUrl } from '../../../environments/environment';
import { Car } from '../../interfaces';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-car-card-gallery',
    templateUrl: './car-card-gallery.component.html',
    styleUrls: ['./car-card-gallery.component.css']
})
export class CarCardGalleryComponent implements OnInit{

    @Input() car:Car
    @Input() usersRatings:UserRatings[]
    @Input() parent:string

    carsImagesUrl = carsImagesUrl
    user:User

    ngOnInit():void{
        this.user = this.selectUser(this.car)
        this.user = this.addRatingToUser(this.usersRatings, this.user)
    }

    selectUser(car:Car):User{
        return ({id:car.userId, username:car.username})
    }

    addRatingToUser(usersRatings:UserRatings[], user:User):User{

        let userRatings:UserRatings[] = usersRatings.filter( ur => ur.userId == user.id)
        let ratings:number[] = userRatings[0].ratings
        let rating = ratings.reduce( (acc, cur) => acc + cur, 0)
        let count = ratings.length

        usersRatings.map( uRating => {
            uRating.userId == user.id ? user.rating = {value:rating / count, count:count} : null
        })

        return user
    }

}
