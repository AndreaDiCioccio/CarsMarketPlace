import { createSelector, createFeatureSelector } from '@ngrx/store'
import { StatusState } from './status.models'

const selectStatusState = createFeatureSelector<StatusState>('status')

export const isStoreLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isStoreLoaded
)

export const isAllCarsLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isAllCarsLoaded
)

export const isRecentSeenCarsLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isRecentSeenCarsLoaded
)

export const isUserObservedCarsLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isObservedCarsLoaded
)

export const isAllObservedCarsLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isAllObservedCarsLoaded
)

export const isUsersRatingsLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isUsersRatingsLoaded
)

export const isBuyedCarsLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isBuyedCarsLoaded
)