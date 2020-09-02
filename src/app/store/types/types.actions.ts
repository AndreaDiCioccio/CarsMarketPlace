import { TypeCB } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getTypes = createAction(
    '[Cars] Get Types'
)

export const getTypesSuccess = createAction(
    '[Cars] Get Types Success',
    props<{types:TypeCB[]}>()
)