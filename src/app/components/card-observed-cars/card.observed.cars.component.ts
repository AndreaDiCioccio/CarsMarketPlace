import { carsImagesUrl } from '../../../environments/environment';
import { Car, Rating } from '../../interfaces';
import { UserRating, CarWithCount } from '../../interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card-observed-cars',
    templateUrl: './card-observed-cars.component.html',
    styleUrls: ['./card-observed-cars.component.css']
})
export class CardObservedCarsComponent implements OnInit {

    rating:Rating

    carsImagesUrl = carsImagesUrl

    @Input() usersRatings:UserRating[]
    @Input() car:CarWithCount

    @Output() SetObervedNotObserved = new EventEmitter<any>()

    ngOnInit(): void {
        this.rating = this.calculateRating(this.usersRatings)
    }

    calculateRating(usersRatings:UserRating[]):Rating{

        let userRatings = usersRatings.filter(userRating => userRating.userId == this.car.userId)

        let ratings:UserRating[] = userRatings
        let rating:Rating = {value:null, count:null}
        rating.count = ratings.length
        rating.value = ratings.reduce( (acc, cur) => acc + cur.value, 0) / rating.count
         
        return rating
    }

    checkBoxClicked(event){
        this.SetObervedNotObserved.emit({carId:this.car.id, checked:event.target.checked})
    }
    
}
