import { UserRatings } from './../../interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as usersRatingsActions from './users-ratings.actions'
import { compareUsersRatings, UsersRatingsState } from './models';

export const adapter = createEntityAdapter<UserRatings>({
    selectId: UserRatings => UserRatings.userId,
    sortComparer:compareUsersRatings
})

export const initialUsersRatingsState = adapter.getInitialState()

export const usersRatingsReducers = createReducer(
    initialUsersRatingsState,
    on(usersRatingsActions.getUsersRatingsSuccess, (state, action) => adapter.addAll(action.usersRatings , state)),
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: UsersRatingsState | undefined, action: Action) {
    return usersRatingsReducers(state, action)
}