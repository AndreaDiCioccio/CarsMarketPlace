import { carsImagesUrl } from './../../../environments/environment';
import { Car } from './../../interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-buyed-cars',
    templateUrl: './card-buyed-cars.component.html',
    styleUrls: ['./card-buyed-cars.component.css']
})
export class CardBuyedCarsComponent {

    @Input() car:Car

    carsImagesUrl = carsImagesUrl

}
