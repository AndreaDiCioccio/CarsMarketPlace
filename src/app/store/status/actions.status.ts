import { createAction, props } from '@ngrx/store';

export const getStoreLoaded = createAction(
    '[Conteiner] Get StoreLoaded'
)

export const setStoreLoaded = createAction(
    '[Conteiner] Set StoreLoaded',
    props<{loaded:boolean}>()
)

export const getRecentSeenCarsLoaded = createAction(
    '[Conteiner] Get RecentSeenCarsLoaded'
)

export const setRecentSeenCarsLoaded = createAction(
    '[Conteiner] Set RecentSeenCarsLoaded',
    props<{loaded:boolean}>()
)