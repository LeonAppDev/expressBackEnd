import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../../pages/Layout';
import Home from '../../pages/Home';
import BoatsManager from '../../pages/BoatsManager'; 
import BoatEditor from '../../components/BoatEditor';

export const routes = [
    { path: '/home', component: Home },
    { path: '/boatsManager', component: BoatsManager },
    { path: '/boats/:id',component: BoatEditor}
];
	
export default function Router () {

	return (
		<BrowserRouter>
		    <Layout>
		        <Switch>   
		            <Redirect exact from="/" to="/home" />
		            {
                        routes.map(route =>
                            <Route key={route.path} path={route.path} component={route.component} />
                        	)
                       
		            }
                </Switch>    
		    </Layout>
		</BrowserRouter>

		)
}