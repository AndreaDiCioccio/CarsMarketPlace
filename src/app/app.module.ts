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
import { ObservedCarsModule } from './store/observedCars/observedCars.module'
import { StatusModule } from './store/status/module.status'


import { GalleryComponent } from './components/gallery/gallery.component';
import { ConteinerGalleryComponent } from './conteiners/conteiner-gallery/conteiner-gallery.component';
import { CarCardGalleryComponent } from './components/car-card-gallery/car-card-gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowUserRatingComponent } from './components/show-user-rating/show-user-rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecentSeenCarsComponent } from './components/recent-seen-cars/recent-seen-cars.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
        ConteinerGalleryComponent,
        CarCardGalleryComponent,
        NavbarComponent,
        ShowUserRatingComponent,
        RecentSeenCarsComponent
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
        ObservedCarsModule,
        StatusModule,
        
        FontAwesomeModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
