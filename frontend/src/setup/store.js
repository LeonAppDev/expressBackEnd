import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createReducer from './reducer';

export default function configStore(initialState = {}){

    const middleware = [
        thunkMiddleware
    ];
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		createReducer(),
		initialState,
		composeEnhancer(applyMiddleware(...middleware))
		);

    if(module.hot) {
        //Since redux 2.x, explicit hot module load is required for reducer
    	module.hot.accept('./reducer',() => {
    		const createNextReducer = require('./reducer').default;
            store.replaceReducer(createNextReducer());
    	});
    }

	return store;
}