import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable'

import { GET_WORKERS } from './constant';
const initialState = fromJS({
	workersList:[],
});

export default handleActions({
	[GET_WORKERS]: (state,action) => {
        
         console.log(action);
		if(action.payload)
			return state.set('workersList', action.payload);
		else
			return state;
	},

},initialState);