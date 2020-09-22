import { TypeCB } from '../../interfaces';
import { createAction, props } from '@ngrx/store'

export const getTypes = createAction(
    '[Cars] Get Types'
)

export const getTypesSuccess = createAction(
    '[Cars] Get Types Success',
    props<{types:TypeCB[]}>()
)

export const setTypeChecked = createAction(
    '[contenier gallery] Set Type Checked',
    props<{typee:TypeCB}>()
)

export const setTypeCheckedSuccess = createAction(
    '[contenier gallery] Set Type Checked Success',
    props<{typee:TypeCB}>()
)

export const setTypesChecked = createAction(
    '[contenier gallery] Set Types Checked',
    props<{types:TypeCB[]}>()
)

export const setTypesCheckedSuccess = createAction(
    '[contenier gallery] Set Types Checked Success',
    props<{types:TypeCB[]}>()
)