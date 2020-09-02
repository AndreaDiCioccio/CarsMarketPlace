import { Car } from './../../interfaces';
import { EntityState } from '@ngrx/entity';

export function compareCars(c1:Car, c2:Car){
    
    const compare = c1.id - c2.id;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}

export interface CarsState extends EntityState<Car>{}