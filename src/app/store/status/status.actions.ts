import { createAction, props } from '@ngrx/store';

export const getStoreLoaded = createAction(
    '[Container] Get StoreLoaded'
)

export const setStoreLoaded = createAction(
    '[Container] Set StoreLoaded',
    props<{loaded:boolean}>()
)

export const getAllCarsLoaded = createAction(
    '[Container] Get AllCars Loaded'
)

export const setAllCarsLoaded = createAction(
    '[Container] Set AllCars Loaded',
    props<{loaded:boolean}>()
)

export const getRecentSeenCarsLoaded = createAction(
    '[Container] Get RecentSeenCarsLoaded'
)

export const setRecentSeenCarsLoaded = createAction(
    '[Container] Set RecentSeenCarsLoaded',
    props<{loaded:boolean}>()
)

export const getUserObservedCarsLoaded = createAction(
    '[Container] Get UserObservedCarsLoaded'
)

export const setUserObservedCarsLoaded = createAction(
    '[Container] Set UserObservedCarsLoaded',
    props<{loaded:boolean}>()
)

export const getAllObservedCarsLoaded = createAction(
    '[Container] Get AllObservedCarsLoaded'
)

export const setAllObservedCarsLoaded = createAction(
    '[Container] Set AllObservedCarsLoaded',
    props<{loaded:boolean}>()
)

export const getUsersRatingsLoaded = createAction(
    '[Container] Get UsersRatingsLoaded'
)

export const setUsersRatingsLoaded = createAction(
    '[Container] Set UsersRatingsLoaded',
    props<{loaded:boolean}>()
)