import { State } from '../Reducer/index';
import { createSelector } from 'reselect';

const getGridState = ((state: State) => {
    return state.grid;
});

export const getGrid = createSelector([getGridState], s => s.tableDef);
