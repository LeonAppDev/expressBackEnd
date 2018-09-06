import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
	GET_BOATS
} from './constant';

const initialState = fromJS({
	boatsList: [],
	isLoading: false,
});

export default handleActions({
    [GET_BOATS]:  (state, action) => {
 
        	console.log(action.payload);
        	console.log(state.isLoading);
        	state.isLoading = false;
            console.log(state.isLoading);
            if(action.payload)
        	return state.set('boatsList',action.payload);
            else
            return state;
    },
},initialState)