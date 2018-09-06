import { createAction } from 'redux-actions';
import { find } from 'lodash';

import { 
    GET_BOATS,
	ASSIGN_WORKER_TOBOAT, 
} from './constant';
import { remoteRequest } from './api';
import { API } from '../../setup/config';

export const getBoats = createAction(GET_BOATS);


export const assignWorkerToBoat = createAction(ASSIGN_WORKER_TOBOAT);

export const fetchBoats = function () {
   
    return (dispatch, getState) =>{
     
    let state = getState();
    state.isLoading = true;
    
    const request = { 
    	method: 'get',
    	url: `${API}boats`
};

	remoteRequest(request).then(res => {
		
		let action = getBoats();
		action.payload = res.data;
        dispatch(action);

	}).catch(err => {

		throw new Error(err);
	});

	console.log(state.isLoading);
}
}

export const saveBoat =  function (boatEntity) {

	return (dispatch, getState) => {
    
        const currentState = getState();      
        const boatsList = currentState.get('boats').get('boatsList');
        
        const boatFound = find(boatsList, {id: Number(boatEntity.id)});
        
      
        let request = {
        	method: '',
        	url: `${API}boats`,
        	data: boatEntity,
        }
           
        console.log(request); 

        if(boatFound)
        {
            request.method = 'put';
            request.url += `/${boatFound.id}`;
        }
        else
        {
        	request.method = 'post';
        }
        
        makeRemoteUpdate(request,dispatch);
	};
}

export const deleteBoat =  function (boatEntity) {

	return (dispatch, getState) => {
    
        const currentState = getState();      
        const boatsList = currentState.get('boats').get('boatsList');
        
        const boatFound = find(boatsList, {id: Number(boatEntity.id)});
        
        if(boatFound)
        {
            const request = {
        	    method: 'delete',
        	    url: `${API}boats/${boatFound.id}`,
        	    data: boatEntity,
            }

            remoteRequest(request).then((res) => {
         
                fetchBoats()(dispatch, getState);
               }).catch((err) => {

                throw new Error(err);
               });
        }


	};
}

function makeRemoteUpdate(request,dispatch) {

    console.log(request);
    remoteRequest(request).then((res) => {
        dispatch(getBoats());
            }).catch((err) => {

             throw new Error(err);
            });
}