import { UserRating } from './../../interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as usersRatingsActions from './users-ratings.actions'
import { UsersRatingsState } from './models';

export const adapter = createEntityAdapter<UserRating>({
    //selectId: UserRatings => UserRatings.userId,
})

export const initialUsersRatingsState = adapter.getInitialState()

export const usersRatingsReducers = createReducer(
    initialUsersRatingsState,
    on(usersRatingsActions.getUsersRatingsSuccess, (state, action) => adapter.addAll(action.usersRatings, state)),
);

export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: UsersRatingsState | undefined, action: Action) {
    return usersRatingsReducers(state, action)
}