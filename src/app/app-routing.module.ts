import { ConteinerGalleryComponent } from './conteiners/conteiner-gallery/conteiner-gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'gallery', component:ConteinerGalleryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
