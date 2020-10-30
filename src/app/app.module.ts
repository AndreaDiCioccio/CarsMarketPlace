import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects'
import { CarsModule } from './store/cars/cars.module';
import { TypesModule } from './store/types/types.module';
import { BrandsModule } from './store/brands/brands.module';
import { UsersRatingsModule } from './store/users-ratings/users-ratings.module'
import { RecentSeenCarsModule } from './store/recentSeenCars/recentSeenCars.module'
import { UserObservedCarsModule } from './store/userObservedCars/userObservedCars.module'
import { AllObservedCarsModule } from './store/allObservedCars/allObservedCars.module'
import { StatusModule } from './store/status/status.module'
import { BuyedCarsModule } from './store/buyedCars/buyedCars.module'


import { GalleryComponent } from './components/gallery/gallery.component';
import { ContainerGalleryComponent } from './containers/container-gallery/container-gallery.component';
import { CardCarsGallery } from './components/card-cars-gallery/card-cars-gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowUserRatingComponent } from './components/show-user-rating/show-user-rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecentSeenCarsComponent } from './components/recent-seen-cars/recent-seen-cars.component';
import { ContainerObservedCarsComponent } from './containers/container-observed-cars/container-observed-cars.component';
import { ObservedCarsComponent } from './components/observed-cars/observed-cars.component';
import { CardObservedCarsComponent } from './components/card-observed-cars/card.observed.cars.component';
import { CarProfileComponent } from './components/car-profile/car-profile.component';
import { ContainerCarProfileComponent } from './containers/container-car-profile/container-car-profile.component';
import { BuyComponent } from './components/buy/buy.component';
import { ContainerBuyComponent } from './containers/container-buy/container-buy.component';
import { ContainerBuyedCarsComponent } from './containers/container-buyed-cars/container-buyed-cars.component';
import { BuyedCarsComponent } from './components/buyed-cars/buyed-cars.component';
import { CardBuyedCarsComponent } from './components/card-buyed-cars/card-buyed-cars.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
        ContainerGalleryComponent,
        CardCarsGallery,
        NavbarComponent,
        ShowUserRatingComponent,
        RecentSeenCarsComponent,
        ContainerObservedCarsComponent,
        ObservedCarsComponent,
        CardObservedCarsComponent,
        CarProfileComponent,
        ContainerCarProfileComponent,
        BuyComponent,
        ContainerBuyComponent,
        ContainerBuyedCarsComponent,
        BuyedCarsComponent,
        CardBuyedCarsComponent
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({maxAge:25, logOnly:environment.production}),
        EffectsModule.forRoot([]),

        CarsModule,
        BrandsModule,
        TypesModule,
        UsersRatingsModule,
        RecentSeenCarsModule,
        UserObservedCarsModule,
        AllObservedCarsModule,
        StatusModule,
        BuyedCarsModule,
        
        FontAwesomeModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
