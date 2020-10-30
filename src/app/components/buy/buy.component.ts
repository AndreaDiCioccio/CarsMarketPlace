import { UserRating } from './../../interfaces';
import { carsImagesUrl, imagesUrl } from './../../../environments/environment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/interfaces';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css']
})
export class BuyComponent {

    isBuyed:boolean = false
    isRated:boolean = false
    car:Car
    ratedStars:string[] = []
    carsImagesUrl = carsImagesUrl
    yellowStar:string = imagesUrl + "yellow-star.jpg";
    greyStar:string = imagesUrl + "grey-star.jpg";

    @Input() set allCars(allCars:Car[]) {
        allCars.forEach( car => this.car = {...car})
    }

    @Output() addRating = new EventEmitter<UserRating>()
    @Output() buyedCar = new EventEmitter<number>()

    buy(): void {
        this.isBuyed = true
    }

    rate(rate){

        for(let j=0;j<rate;j++){
            this.ratedStars[j] = this.yellowStar;      
        }

        for(let k=rate;k<=4;k++){
            this.ratedStars[k] = this.greyStar;
        }

        this.isRated = true;

        //emit
        this.addRating.emit({id:0, value:rate, userId:this.car.userId})
        this.buyedCar.emit(this.car.id)
            
    }

}
