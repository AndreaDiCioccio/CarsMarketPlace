import { observedCars, brands } from './../../mockData';
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

export class GalleryComponent implements OnInit, DoCheck, OnChanges{

    @Input() allCars:Car[]
    @Input() brands:BrandCB[]
    @Input() types:TypeCB[]
    @Input() usersRatings:UserRating[]
    @Input() recentSeenCars:Car[]
    @Input() observedCars:ObservedCar[]

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
/*     brandsCB:BrandCB[] = []
    typesCB:TypeCB[] = [] */

    user:User

    iterableDiffer:IterableDiffer<any>

    checkboxBrandAll:boolean = true
    checkboxTypeAll:boolean = true

    leftConteinerClass:string

    faBars = faBars

    constructor( private authService:AuthenticationService, private iterableDiffers: IterableDiffers){
        this.iterableDiffer = iterableDiffers.find([]).create(null);
    }

    // evocata quando ci sono cambiamenti nelle proprietà di input
    ngOnChanges(changes: SimpleChanges): void {
        // c'è bisogno di chiamare filterCars perchè oltre a filtrare le auto aggiorna l'array in visualizzazione
        changes.allCars ? this.filterCars(this.brands, this.types) : null        
    }

    ngDoCheck(): void {
        // used when observed buttons are pressed
        let changes = this.iterableDiffer.diff(this.observedCars);
        if (changes) {
            this.user ? this.setObservedCars() : null
        }

    }

    ngOnInit():void{
        this.user = this.authService.currentUserValue
        this.user ? this.setObservedCars() : null
        this.initFilters()
        this.filterCars(this.brands, this.types)

        this.showNormalLeftConteiner()
        window.addEventListener('resize', () => this.showNormalLeftConteiner())
    }

    // setta le checkbox degli "all" dei filtri a false se altre checkbox risultano selezionate
    initFilters(){
        let filtersBrands:boolean = false
        let filtersTypes:boolean = false
        this.brands.some( brand => brand.checked) ? filtersBrands = true : null
        this.types.some( type => type.checked) ? filtersTypes = true : null

        filtersBrands ? this.checkboxBrandAll = false : null
        filtersTypes ? this.checkboxTypeAll = false : null
    }

    // operazioni da effettuara al cambiamento di una checkbox dei filtri.
    checkboxChange(event, brand, type):void{

        let name = event.target.name;
        let checked = event.target.checked;
        
        let brands:BrandCB[] = JSON.parse(JSON.stringify(this.brands))
        let types:TypeCB[] = JSON.parse(JSON.stringify(this.types))

        //BRANDS
        if(name =='allBrands'){

            if(checked == true){
        
                brands.map(brand => brand.checked = false);

                this.checkboxBrandAll = true

                this.filterCars(brands, types)
                brands = this.countBrands(brands)
                types = this.countTypes(types)
                this.setBrandsChecked.emit(brands)
                this.setTypesChecked.emit(types)
            
            }else{

                setTimeout(() => {
                    this.checkboxBrandAll = true
                }, 10);
                
            }


        } else if(name == 'otherBrands'){

            brands = brands.map( b => {
                if(b.id == brand.id){
                    return ({...brand, checked:checked})
                }else{
                    return b
                }
            })

            if(checked == true){

                this.checkboxBrandAll = false;
              
            }else
                brands.some( b => b.checked) ? null : this.checkboxBrandAll = true

            this.filterCars(brands, types)
            brands = this.countBrands(brands)
            types = this.countTypes(types)
            this.setBrandsChecked.emit(brands)
            this.setTypesChecked.emit(types)
        
        }

        // TYPES        
        if(name =='allTypes'){

            if(checked == true){

                types.map(type => type.checked = false)

                this.checkboxTypeAll = true
            
                this.filterCars(brands, types)
                brands = this.countBrands(brands)
                types = this.countTypes(types)
                this.setBrandsChecked.emit(brands)
                this.setTypesChecked.emit(types)

            }else{
                setTimeout(() => {
                    this.checkboxTypeAll = true
                }, 10);
            }

        } else if(name == 'otherTypes'){

            types = types.map( t => {
                if(t.id == type.id){
                    return ({...type, checked:checked})
                }else{
                    return t
                }
            })

            if(checked == true){

                this.checkboxTypeAll = false;

            }else
                types.some( t => t.checked) ? null : this.checkboxTypeAll = true

            this.filterCars(brands, types)
            brands = this.countBrands(brands)
            types = this.countTypes(types)
            this.setBrandsChecked.emit(brands)
            this.setTypesChecked.emit(types)

        }

    }

    // aggiorna la proprietà "observed" di allCars
    setObservedCars():void{
        let allCars:Car[] = JSON.parse(JSON.stringify(this.allCars))
        let observedCars:ObservedCar[] = [...this.observedCars]

        allCars.map( car => {
            // se la car è osservata, setta "observed" a true
            observedCars.some( obs => obs.carId == car.id) ? car.observed = true : car.observed = false

        })

        this.setObservedCarsAction.emit(allCars)

    }

    // aggiorna l array per la gallery (this.filteredCars) con l'array modificato eventualmente nei filtri o nella proprietà observed (this.allCars)
    filterCars(brands:BrandCB[], types:TypeCB[]):void{

        let allCars = [...this.allCars];
        
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
        
        return br
    
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

        return ty
    
    }

    showMobileLeftConteiner():void{
        this.leftConteinerClass = 'show-mobile-left-conteiner'
    }

    showNormalLeftConteiner():void{
        if(window.innerWidth >= 1051){
            this.leftConteinerClass = 'show-normal-left-conteiner'
        }else{
            this.hideLeftContenier()
        }
    }

    hideLeftContenier():void{
        this.leftConteinerClass = 'hide-left-conteiner'
    }

    onSetObservedCar(carId:number):void{
        this.setObservedCarAction.emit(carId)
    }

    onSetNotObservedCar(carId:number):void{
        this.setNotObservedCarAction.emit(carId)
    }

}
