import { combineReducers } from 'redux-immutable';

import boatsReducer from '../reducers/boatsEndPoint/reducer';
import workersReducer from '../reducers/workersEndPoint/reducer';

export default function createReducer () {

   return combineReducers({
    	boats:boatsReducer,
    	workers:workersReducer,
    })
}