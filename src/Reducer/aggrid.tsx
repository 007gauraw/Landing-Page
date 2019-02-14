import { Aggridmodel } from '../Models/aggrid'
import { ActionTypes, Action } from '../Actions/index'

export interface State {
    tableDef: Aggridmodel
}

// Define our initialState
export const initialState: State = {
    tableDef: {
        colums: [],
        row: []
    }
}

export function reducer(state: State = initialState, actions: Action) {
    if (actions.type === ActionTypes.GET_GRID_DATA) {
        return {
            ...state,
            ...actions.Payload
        }
    } else if (actions.type === ActionTypes.UPDATE_GRID) {
        return {
            ...state,
            tableDef: {
                colums: [...state.tableDef.colums],
                row: [...state.tableDef.row, actions.Payload.form]
            }
        }
    }

    return state;
}