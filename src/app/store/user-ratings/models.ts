import { UserRatings } from './../../interfaces';
import { EntityState } from '@ngrx/entity';

export function compareUsersRatings(r1:UserRatings, r2:UserRatings){
    
    const compare = r1.userId - r2.userId;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}

export interface UsersRatingsState extends EntityState<UserRatings>{}