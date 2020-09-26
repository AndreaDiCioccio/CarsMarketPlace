import { createSelector, createFeatureSelector } from '@ngrx/store'
import { StatusState } from './models.status'

const selectStatusState = createFeatureSelector<StatusState>('status')

export const isStoreLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isStoreLoaded
)

export const isRecentSeenCarsLoaded = createSelector(
    selectStatusState,
    (status:StatusState) => status.isRecentSeenCarsLoaded
)