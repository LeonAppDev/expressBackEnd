import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable'

const initialState = fromJS({
	workers:[],
});

export default handleActions({
	get_worker: (action,state) => {

	},

},initialState);