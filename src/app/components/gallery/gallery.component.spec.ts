import { AuthenticationService } from './../../services/authentication.service';
import { cars } from './../../mockData';
import { TypeCB, Car } from './../../interfaces';
import { GalleryComponent } from './gallery.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandCB } from 'src/app/interfaces';
import { IterableDiffers } from '@angular/core';

describe('GalleryComponent', () => {

    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>
    let authServiceMock: AuthenticationService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[
                GalleryComponent, 
                {provide:AuthenticationService, useValue:authServiceMock}, 
                {provide:IterableDiffers}
            ]
        })

        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;

        authServiceMock = TestBed.inject(AuthenticationService)
    })

    it('sholud create', () => {
        expect(component).toBeTrue
    })

    it('should return cars filtered by checked boxes 1 (false, false)', () => {
        component.checkboxBrandAll = false
        component.checkboxTypeAll = false
        let brands:BrandCB[] = [{id:0, name:'AUDI', checked:true, count:0}]
        let types:TypeCB[] = [{id:0, name:'Berlina', checked:true, count:0}]
        let filteredCars:Car[] = [
            {id: 9, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 7, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 2, username: "AmparLed"},
            {id: 11, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 15, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 1, username: "JoeVan"},
            {id: 23, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 3, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 2, username: "AmparLed"}
        ]
        let result = component.filterCars(brands, types, cars)
        
        expect(result).toEqual(filteredCars)
    })

    it('should return cars filtered by checked boxes 2, (false, true)', () => {
        component.checkboxBrandAll = false
        component.checkboxTypeAll = true
        let brands:BrandCB[] = [{id:0, name:'AUDI', checked:true, count:0}]
        let types:TypeCB[] = [{id:0, name:'Berlina', checked:true, count:0}]
        let filteredCars:Car[] = [

            {id: 4, brand: "AUDI", model: "Q7", type: "Jeep", price: 70000, discount: 14, image1:"audi_Q7_img1.jpg", image2: "audi_Q7_img2.jpg", image3: "audi_Q7_img3.jpg", userId: 3, username: "KobyNik"},
            {id: 9, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 7, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 2, username: "AmparLed"},
            {id: 11, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 15, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 1, username: "JoeVan"},
            {id: 23, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 3, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 2, username: "AmparLed"}
        ]
        let result = component.filterCars(brands, types, cars)
        
        expect(result).toEqual(filteredCars)
    })

    it('should return cars filtered by checked boxes 3, (true, false)', () => {
        component.checkboxBrandAll = true
        component.checkboxTypeAll = false
        let brands:BrandCB[] = [{id:0, name:'AUDI', checked:true, count:0}]
        let types:TypeCB[] = [{id:0, name:'Berlina', checked:true, count:0}]
        let filteredCars:Car[] = [
            {id: 1, brand: "BMW", model: "Serie 1", type: "Berlina", price: 27000, discount: 4, image1: "bmw_serie1_img1.jpg", image2: "bmw_serie1_img2.jpg", image3: "bmw_serie1_img3.jpg", userId: 0, username: "StanfRei"},
            {id: 6, brand: "FIAT", model: "500 X Lounge", type: "Berlina", price: 21600, discount: 0, image1: "fiat_500XLounge_img1.jpg", image2: "fiat_500XLounge_img2.jpg", image3: "fiat_500XLounge_img3.jpg", userId: 3, username: "KobyNik"},
            {id: 9, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 7, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 2, username: "AmparLed"},
            {id: 11, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 15, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 1, username: "JoeVan"},
            {id: 14, brand: "FIAT", model: "500 X Lounge", type: "Berlina", price: 21600, discount: 4, image1: "fiat_500XLounge_img1.jpg", image2: "fiat_500XLounge_img2.jpg", image3: "fiat_500XLounge_img3.jpg", userId: 4, username: "KiaraMur"},
            {id: 23, brand: "AUDI", model: "A1", type: "Berlina", price: 22000, discount: 3, image1: "audi_A1_img1.jpg", image2: "audi_A1_img2.jpg", image3: "audi_A1_img3.jpg", userId: 2, username: "AmparLed"},
            {id: 25, brand: "FIAT", model: "500 X Lounge", type: "Berlina", price: 21600, discount: 15, image1: "fiat_500_img1.jpg", image2: "fiat_500_img2.jpg", image3: "fiat_500_img3.jpg", userId: 3, username: "KobyNik"},
            {id: 26, brand: "BMW", model: "Serie 1", type: "Berlina", price: 27000, discount: 10, image1: "bmw_serie1_img1.jpg", image2: "bmw_serie1_img2.jpg", image3: "bmw_serie1_img3.jpg", userId: 0, username: "StanfRei"},
            {id: 28, brand: "BMW", model: "Serie 1", type: "Berlina", price: 27000, discount: 8, image1: "bmw_serie1_img1.jpg", image2: "bmw_serie1_img2.jpg", image3: "bmw_serie1_img3.jpg", userId: 0, username: "StanfRei"}
        ] 
        let result = component.filterCars(brands, types, cars)
        
        expect(result).toEqual(filteredCars)
    })

    it('should return cars NOT filtered', () => {
        component.checkboxBrandAll = true
        component.checkboxTypeAll = true
        let brands:BrandCB[] = [{id:0, name:'AUDI', checked:true, count:0}]
        let types:TypeCB[] = [{id:0, name:'Berlina', checked:true, count:0}]
        let filteredCars:Car[] = cars
        let result = component.filterCars(brands, types, cars)
        
        expect(result).toEqual(filteredCars)
    })


})