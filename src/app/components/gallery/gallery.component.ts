import { ObservedCarsService } from './../../services/observed-cars.service';
import { AuthenticationService } from './../../services/authentication.service';
import { BrandCB, TypeCB, User, ObservedCar, UserRating } from './../../interfaces';
import { Component, Input, OnInit, Output, EventEmitter, IterableDiffers, IterableDiffer, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Car } from 'src/app/interfaces';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnChanges{

    @Input() allCars:Car[]
    @Input() brands:BrandCB[]
    @Input() types:TypeCB[]
    @Input() usersRatings:UserRating[]
    @Input() recentSeenCars:Car[]
    @Input() userObservedCars:ObservedCar[]

    @Output() setObservedCarAction = new EventEmitter<any>()
    @Output() setNotObservedCarAction = new EventEmitter<any>()
    @Output() setObservedCarsAction = new EventEmitter<any>()
    @Output() setBrandCount = new EventEmitter<any>()
    @Output() setTypeCount = new EventEmitter<any>()
    @Output() setBrandChecked = new EventEmitter<any>()
    @Output() setTypeChecked = new EventEmitter<any>()
    @Output() setBrandsChecked = new EventEmitter<any>()
    @Output() setTypesChecked = new EventEmitter<any>()

    filteredCars:Car[] = []

    user:User

    iterableDiffer:IterableDiffer<any>

    checkboxBrandAll:boolean = true
    checkboxTypeAll:boolean = true

    leftContainerClass:string = 'hide-left-container'

    faBars = faBars

    constructor( private authService:AuthenticationService, private observedCarsService:ObservedCarsService){}

    ngOnInit():void{
        
        this.user = this.authService.currentUserValue
        this.user ? this.observedCarsService.setObservedCars(this.allCars, this.userObservedCars) : null
        this.initFiltersCheckBoxes()
        this.filteredCars = this.filterCars(this.brands, this.types, this.allCars)

        this.showNormalLeftContainer()
        window.addEventListener('resize', () => this.showNormalLeftContainer())

    }

    // evocata quando ci sono cambiamenti nelle proprietà di input
    ngOnChanges(changes: SimpleChanges): void {
        // c'è bisogno di chiamare filterCars perchè oltre a filtrare le auto aggiorna l'array in visualizzazione
        //changes.allCars ? this.filterCars(this.brands, this.types) : null        
        changes.allCars ? this.filteredCars = this.filterCars(this.brands, this.types, this.allCars) : null
        if(changes.userObservedCars) 
            this.user ? this.observedCarsService.setObservedCars(this.allCars, this.userObservedCars) : null

        }

    // setta le checkbox degli "all" dei filtri a false se altre checkbox risultano selezionate
    initFiltersCheckBoxes(){
        let filtersBrands:boolean = false
        let filtersTypes:boolean = false
        this.brands.some( brand => brand.checked) ? filtersBrands = true : null
        this.types.some( type => type.checked) ? filtersTypes = true : null

        filtersBrands ? this.checkboxBrandAll = false : null
        filtersTypes ? this.checkboxTypeAll = false : null
    }

    checkboxBrandAllChange(checked:boolean):void{
        
        let brands:BrandCB[] = JSON.parse(JSON.stringify(this.brands))
        let types:TypeCB[] = JSON.parse(JSON.stringify(this.types))

        if(checked == true){
        
            brands.map(brand => brand.checked = false);

            this.checkboxBrandAll = true

            this.filteredCars = this.filterCars(brands, types, this.allCars)
            brands = this.countBrands(brands)
            types = this.countTypes(types)
            this.setBrandsChecked.emit(brands)
            this.setTypesChecked.emit(types)
        
        }else{
            setTimeout( () => this.checkboxBrandAll = true, 500)            
        }
    }

    checkboxBrandsChange(checked:boolean, brand):void{

        let brands:BrandCB[] = JSON.parse(JSON.stringify(this.brands))
        let types:TypeCB[] = JSON.parse(JSON.stringify(this.types))

        brands = brands.map( b => {
            if(b.id == brand.id){
                return ({...brand, checked:checked})
            }else{
                return b
            }
        })

        if(checked == true){

            this.checkboxBrandAll = false;
          
        }else{
            let some = brands.some( b => b.checked)
            some ? null : this.checkboxBrandAll = true
        }

        this.filteredCars = this.filterCars(brands, types, this.allCars)
        brands = this.countBrands(brands)
        types = this.countTypes(types)
        this.setBrandsChecked.emit(brands)
        this.setTypesChecked.emit(types)

    }

    checkboxTypesAllChange(checked:boolean):void{

        let brands:BrandCB[] = JSON.parse(JSON.stringify(this.brands))
        let types:TypeCB[] = JSON.parse(JSON.stringify(this.types))

        if(checked == true){

            types.map(type => type.checked = false)

            this.checkboxTypeAll = true
        
            this.filteredCars = this.filterCars(brands, types, this.allCars)
            brands = this.countBrands(brands)
            types = this.countTypes(types)
            this.setBrandsChecked.emit(brands)
            this.setTypesChecked.emit(types)

        }else{
            setTimeout(() =>  this.checkboxTypeAll = true, 500)
        }

    }

    checkboxTypesChange(checked:boolean, type){

        let brands:BrandCB[] = JSON.parse(JSON.stringify(this.brands))
        let types:TypeCB[] = JSON.parse(JSON.stringify(this.types))

        types = types.map( t => {
            if(t.id == type.id){
                return ({...type, checked:checked})
            }else{
                return t
            }
        })

        if(checked == true){

            this.checkboxTypeAll = false;

        }else{
            let some = types.some( t => t.checked)
            some  ? null : this.checkboxTypeAll = true
        }

        this.filteredCars = this.filterCars(brands, types, this.allCars)
        brands = this.countBrands(brands)
        types = this.countTypes(types)
        this.setBrandsChecked.emit(brands)
        this.setTypesChecked.emit(types)

    }
    
    // operazioni da effettuara al cambiamento di una checkbox dei filtri.
    checkboxChange(event, brand, type):void{

        let name = event.target.name;
        let checked = event.target.checked;
        
        //BRANDS
        if(name =='allBrands'){

            this.checkboxBrandAllChange(checked)


        } else if(name == 'otherBrands'){

           this.checkboxBrandsChange(checked, brand)
        
        }

        // TYPES        
        if(name =='allTypes'){

            this.checkboxTypesAllChange(checked)

        } else if(name == 'otherTypes'){

            this.checkboxTypesChange(checked, type)

        }

    }

    

    // aggiorna l array per la gallery (this.filteredCars) con l'array modificato eventualmente nei filtri o nella proprietà observed (this.allCars)
    filterCars(brands:BrandCB[], types:TypeCB[], allCars:Car[]):Car[]{

        let filteredCars:Car[];

        const checkedBrands:BrandCB[] = brands.filter(brand => brand.checked);
        const checkedTypes:TypeCB[] = types.filter(type => type.checked);

        if(!this.checkboxBrandAll && !this.checkboxTypeAll){

            filteredCars = allCars.filter(car => checkedBrands.find(brand => brand.name === car.brand) && checkedTypes.find(type => type.name === car.type));

        } else if(!this.checkboxBrandAll && this.checkboxTypeAll){

            filteredCars = allCars.filter(car => checkedBrands.find(brand => brand.name === car.brand));
        
        }else if(this.checkboxBrandAll && !this.checkboxTypeAll){
        
            filteredCars = allCars.filter(car => checkedTypes.find(type => type.name ===car.type));

        }else{

            filteredCars = [...allCars];
        
        }

        return [...filteredCars]

    }
 
    // conta le occorrenze di ogni brand, ad esempio ferrari(2)
    countBrands(brands:BrandCB[]):BrandCB[]{

        let br:BrandCB[] = brands.map( brand => {
            
            let count = 0;
            
            this.filteredCars.forEach( car => {
                brand.name == car.brand ? count++ : null
            })
            
            brand.count = count;

            return brand
        
        })
        
        return brands
    
    }

    // conta le occorrenze di ogni type, ad esempio jeep(2)
    countTypes(types:TypeCB[]):TypeCB[]{

        let ty:TypeCB[] = types.map( type => {

            let count = 0;
            
            this.filteredCars.forEach( car => {
                type.name == car.type ? count++ : null
            
            })
            
            type.count = count;

            return type
        })

        return types
    
    }

    showMobileLeftContainer():void{
        this.leftContainerClass = 'show-mobile-left-container'
    }

    showNormalLeftContainer():void{
        if(window.innerWidth >= 1051){
            this.leftContainerClass = 'show-normal-left-container'
        }else{
            this.hideLeftContanier()
        }
    }

    hideLeftContanier():void{
        this.leftContainerClass = 'hide-left-container'
    }

    onSetObservedCar(carId:number):void{
        this.setObservedCarAction.emit(carId)
    }

    onSetNotObservedCar(carId:number):void{
        this.setNotObservedCarAction.emit(carId)
    }

}
