import { combineReducers } from 'redux'
import * as fromGrid from './aggrid'

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
  grid: fromGrid.State
}

/*
 * initialState of the app
 */
export const initialState: State = {
  grid: fromGrid.initialState
}

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers<State>({
    grid: fromGrid.reducer
})