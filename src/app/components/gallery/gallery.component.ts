import { BrandCB, TypeCB, UserRatings } from './../../interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit{

    @Input() allCars:Car[]
    @Input() brands:BrandCB[]
    @Input() types:TypeCB[]
    @Input() usersRatings:UserRatings[]

    filteredCars:Car[] = []

    checkboxBrandAll:boolean = true
    checkboxTypeAll:boolean = true

    faBars = faBars

    ngOnInit():void{
        this.filteredCars = this.allCars
        this.filterCars()
    }
 
    checkboxChange(event):void{
        
        let name = event.target.name;
        let checked = event.target.checked;
        
        //BRANDS
        let brands:BrandCB[] = [...this.brands]

        if(name =='allBrands'){
        
            brands.map(brand => brand.checked = false);

            this.brands = brands

        } else if(name == 'otherBrands'){

            if(checked == true){

                this.checkboxBrandAll = false;

            } else {

                let isOneChecked:boolean = false;
                brands.map(brand => brand.checked ? isOneChecked = true : null)

                if(!isOneChecked)
                    this.checkboxBrandAll = true;

            }

            this.brands = brands
        
        }

        // TYPES
        let types:TypeCB[] = [...this.types]

        if(name =='allTypes'){
    
            types.map(type => type.checked = false)
        
            this.types = types

        } else if(name == 'otherTypes'){

            if(checked == true){

                this.checkboxTypeAll = false;

            } else {

                let isOneChecked:boolean = false;
                types.map (type => type.checked ? isOneChecked = true : null)

                if(!isOneChecked)
                this.checkboxTypeAll = true;

            }

            this.types = types
        
        }

        this.filterCars();

    }

    filterCars():void{
        
        let allCars = [...this.allCars];
        let brands = [...this.brands];
        let types = [...this.types];
        
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

        this.filteredCars = [...filteredCars]
        
        this.countBrands(filteredCars);
        this.countTypes(filteredCars);
    
    }
 
    // conta le occorrenze di ogni brand, ad esempio ferrari(2)
    countBrands(cars:Car[]):void{
        
        let brands = [...this.brands];
        
        brands.map( brand => {
            
            let count = 0;
            
            cars.map( car => {
                brand.name == car.brand ? count++ : null
            })
            
            brand.count = count;
        
        })
        
        this.brands = brands
    
    }

    // conta le occorrenze di ogni type, ad esempio jeep(2)
    countTypes(cars:Car[]):void{

        let types = [...this.types];
    
        types.map( type => {
            let count = 0;
            cars.map( car => {
                type.name == car.type ? count++ : null
            })
            type.count = count;
        })

        this.types = types
    
    }

    showLeftConteiner():void{
        console.log('show')
        let element = document.getElementById('left-conteiner')
        element.style.display = 'block'
        element.style.position = 'absolute'
        element.style.top = '145px'
        element.style.left = '10px'
    }

    hideLeftContenier():void{
        console.log('hide')
        let element = document.getElementById('left-conteiner')
        element.style.display = 'none'
    }

}
