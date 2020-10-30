import { ContainerBuyedCarsComponent } from './containers/container-buyed-cars/container-buyed-cars.component';
import { ContainerBuyComponent } from './containers/container-buy/container-buy.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ContainerObservedCarsComponent } from './containers/container-observed-cars/container-observed-cars.component';
import { ContainerGalleryComponent } from './containers/container-gallery/container-gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerCarProfileComponent } from './containers/container-car-profile/container-car-profile.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'gallery', component:ContainerGalleryComponent},
    {path:'carProfile/:carId', component:ContainerCarProfileComponent},
    {path:'observed-cars', component:ContainerObservedCarsComponent, canActivate:[AuthGuardService]},
    {path:'buy/:carId', component:ContainerBuyComponent, canActivate:[AuthGuardService]},
    {path:'buyed-cars', component:ContainerBuyedCarsComponent, canActivate:[AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
