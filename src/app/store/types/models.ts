import { TypeCB } from '../../interfaces';
import { EntityState } from '@ngrx/entity';

export function compareTypes(t1:TypeCB, t2:TypeCB){
    
    const compare = t1.id - t2.id;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}

export interface TypesState extends EntityState<TypeCB>{}