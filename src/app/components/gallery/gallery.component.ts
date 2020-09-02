import { BrandCB, TypeCB } from './../../interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit{

    @Input() allCars:BehaviorSubject<Car[]>
    @Input() brands:BehaviorSubject<BrandCB[]>
    @Input() types:BehaviorSubject<TypeCB[]>

    filteredCars:BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>(null)

    checkboxBrandAll:boolean = true
    checkboxTypeAll:boolean = true

    ngOnInit():void{
        this.filteredCars = this.allCars
        setTimeout(() => {
            console.log('onInit brands:', this.brands.value)
        }, 5000);
        
        //this.filterCars()
    }
 
    checkboxChange(event):void{
        
        let name = event.target.name;
        let checked = event.target.checked;
        
        console.log('brands', this.brands.value)

        //BRANDS
        let brands:BrandCB[] = this.brands.value;

        if(name =='allBrands'){
        
            brands.map(brand => brand.checked = false);

            this.brands.next(brands);

        } else if(name == 'otherBrands'){

            if(checked == true){

                this.checkboxBrandAll = false;

            } else {

                let isOneChecked:boolean = false;
                brands.map(brand => brand.checked ? isOneChecked = true : null)

                if(!isOneChecked)
                    this.checkboxBrandAll = true;

            }

            this.brands.next(brands);
        
        }

        // TYPES
        let types:TypeCB[] = this.types.value;

        if(name =='allTypes'){
    
            types.map(type => type.checked = false)
        
            this.types.next(types);

        } else if(name == 'otherTypes'){

            if(checked == true){

                this.checkboxTypeAll = false;

            } else {

                let isOneChecked:boolean = false;
                types.map (type => type.checked ? isOneChecked = true : null)

                if(!isOneChecked)
                this.checkboxTypeAll = true;

            }

            this.types.next(types);
        
        }

        this.filterCars();

    }

    filterCars():void{
        
        let allCars = [...this.allCars.value];
        let brands = [...this.brands.value];
        let types = [...this.types.value];
        
        const checkedBrands = brands.filter(brand => brand.checked);
        const checkedTypes = types.filter(type => type.checked);

        let filteredCars:Car[];

        if(!this.checkboxBrandAll && !this.checkboxTypeAll){

            filteredCars = allCars.filter(car => checkedBrands.find(brand => brand.name === car.brand) && checkedTypes.find(type => type.name === car.type));

        } else if(!this.checkboxBrandAll && this.checkboxTypeAll){

            filteredCars = allCars.filter(car => checkedBrands.find(brand => brand.name === car.brand));
        
        }else if(this.checkboxBrandAll && !this.checkboxTypeAll){
        
            filteredCars = allCars.filter(car => checkedTypes.find(type => type.name ===car.type));

        }else{

            filteredCars = [...allCars];
        
        }

        this.filteredCars.next(filteredCars);
        
        this.countBrands(filteredCars);
        this.countTypes(filteredCars);
    
    }
 
    // conta le occorrenze di ogni brand, ad esempio ferrari(2)
    countBrands(cars:Car[]):void{
        
        let brands = [...this.brands.value];
        
        brands.map( brand => {
            
            let count = 0;
            
            cars.map( car => {
                brand.name == car.brand ? count++ : null
            })
            
            brand.count = count;
        
        })
        
        this.brands.next(brands);
    
    }

    // conta le occorrenze di ogni type, ad esempio jeep(2)
    countTypes(cars:Car[]):void{

        let types = [...this.types.value];
    
        types.map( type => {
            let count = 0;
            cars.map( car => {
                type.name == car.type ? count++ : null
            })
            type.count = count;
        })

        this.types.next(types);
    
    }

}
