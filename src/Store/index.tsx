import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { State, reducer, initialState } from '../Reducer/index';
import thunk from 'redux-thunk';

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const store = createStore<State, any, any, any>(reducer, initialState, applyMiddleware(logger, thunk))

export default store