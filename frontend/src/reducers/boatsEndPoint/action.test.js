import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getBoats, fetchBoats } from './action';
import { GET_BOATS } from './constant';
import { API } from '../../setup/config';


describe('actions', () => {

	it('should create an action to set boats information in payload to state ', () => {

	   const boat = { 
	       id: 1, 
	   	   name: 'test',
	   	   type: 'test',
	   	   length: 'test'
	   	};

	   	const expectedAction = {
	   		type: GET_BOATS,
	   		payload: boat,
	   	};

	   	expect(getBoats(boat)).toEqual(expectedAction);
	});

});

const middlewares = [thunkMiddleware];
const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {

    afterEach(() => {

        	mockAxios.reset();
        	mockAxios.restore();
        });

    it('should create an function action to get boats information from remote and set them to state', () => {
        
        mockAxios
            .onGet('/boats').reply(200, { boats:[{
            		    id: 1,
            		    name: 'test1',
            		    type: 'test1',
            		    length: 'test1'
            	    },
            	    {
            		    id: 2,
            		    name: 'test2',
            		    type: 'test2',
            		    length: 'test2'
            	    }] 
            	    }
                   );

        const request = { 
    	method: 'get',
    	url: `/boats`
           };

        axios(request).then(function(response){
        	console.log(response.data);
        }).catch(function(err){
        	throw new Error(err);
        });



        const expectedActions = [
            {type: GET_BOATS, payload: [{
            		    id: 1,
            		    name: 'test1',
            		    type: 'test1',
            		    length: 'test1'
            	    },
            	    {
            		    id: 2,
            		    name: 'test2',
            		    type: 'test2',
            		    length: 'test2'
            	    }]}
        ];

        const store = mockStore({});

        return store.dispatch(fetchBoats()).then(() => {
             
            expect(store.getActions()).toEqual(expectedActions);

        })
  });
})