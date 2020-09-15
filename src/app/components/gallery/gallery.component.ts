import { observedCars } from './../../mockData';
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

    filteredCars:Car[] = []

    user:User

    iterableDiffer:IterableDiffer<any>

    checkboxBrandAll:boolean = true
    checkboxTypeAll:boolean = true

    leftConteinerClass:string

    faBars = faBars

    constructor( private authService:AuthenticationService, private iterableDiffers: IterableDiffers, 
                private changeDetectionRef:ChangeDetectorRef){
        this.iterableDiffer = iterableDiffers.find([]).create(null);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes)
    }

    ngDoCheck(): void {
        // usato a causa del click sui pulsanti observe / observed
        let changes = this.iterableDiffer.diff(this.observedCars);
        if (changes) {
            this.user ? this.setObservedCars() : null
        }

    }

    

    ngOnInit():void{
        this.filteredCars = this.allCars
        this.user = this.authService.currentUserValue
        this.user ? this.setObservedCars() : null
        this.filterCars()

        this.showNormalLeftConteiner()
        window.addEventListener('resize', () => this.showNormalLeftConteiner())

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

    setObservedCars():void{
        //let allCars:Car[] = [...this.allCars]
        let allCars:Car[] = JSON.parse(JSON.stringify(this.allCars))
        let observedCars:ObservedCar[] = [...this.observedCars]

        allCars.map( car => {

            observedCars.some( obs => obs.carId == car.id) ? car.observed = true : car.observed = false

        })

        this.setObservedCarsAction.emit(allCars)

        setTimeout(() => {
            //console.log('gallery allCars', this.allCars)
        }, 1000);
        
        //this.allCars = [...allCars]
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

    showMobileLeftConteiner():void{
        console.log('show')
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
