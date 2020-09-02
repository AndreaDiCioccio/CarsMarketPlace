import { Car, BrandCB } from './../../interfaces';
import { EntityState } from '@ngrx/entity';

export function compareBrands(b1:BrandCB, b2:BrandCB){
    
    const compare = b1.id - b2.id;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}

export interface BrandsState extends EntityState<BrandCB>{}