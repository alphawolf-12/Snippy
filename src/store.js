import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../src/reducers';

const middlewares = [thunk];
export const getStore = preloadedState => {
    const store = createStore(reducer, preloadedState,applyMiddleware(...middlewares) );
    return store;
}