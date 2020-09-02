import { carsImagesUrl } from '../../../environments/environment';
import { Car } from '../../interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-car-card-gallery',
    templateUrl: './car-card-gallery.component.html',
    styleUrls: ['./car-card-gallery.component.css']
})
export class CarCardGalleryComponent {

    @Input()car:Car

    carsImagesUrl = carsImagesUrl
  
}
