import { createAction } from 'redux-actions';

import { GET_WORKERS } from './constant';
import { remoteRequest } from '../../setup/api';
import { API } from '../../setup/config';


export const getWorkers = createAction(GET_WORKERS);

export const fetchWorkers = () => (dispatch, getState) => {
    
    const request = {
    	method: 'get',
    	url: `${API}workers`
    };

    return remoteRequest(request).then((res) => {
      
        dispatch(getWorkers(res.data));
    }).catch((err) => {

    	throw new Error(err);
    })
}