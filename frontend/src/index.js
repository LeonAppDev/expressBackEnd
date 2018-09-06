import React from 'react';
import { render } from 'react-dom';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';

import Router from './setup/Router';
import configStore from './setup/store';
import registerServiceWorker from './registerServiceWorker';


const initialState = fromJS({});
const store = configStore(initialState);

function renderApp(Component){

	render(
		<Provider store={store}>
        <Component />
		</Provider>,
		document.getElementById('root')
		);
}


renderApp(Router);

registerServiceWorker();

if (module.hot) {
    
    module.hot.accept();
}