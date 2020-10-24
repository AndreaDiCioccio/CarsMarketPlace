import { AuthGuardService } from './services/auth-guard.service';
import { ContainerObservedCarsComponent } from './containers/container-observed-cars/container-observed-cars.component';
import { ContainerGalleryComponent } from './containers/container-gallery/container-gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'gallery', component:ContainerGalleryComponent},
    {path:'observed-cars', component:ContainerObservedCarsComponent, canActivate:[AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
