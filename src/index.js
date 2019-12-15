import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Template from './MainPage/index.js';
import NotFound404 from './404/index.js';
import Home from './Home/index.js'
import Test from './Test/index.js'
import * as serviceWorker from './serviceWorker';
import { routes } from './config/global'

ReactDOM.render(
	<BrowserRouter>
		<Template>
			<Switch>
        {
          routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={index}
                component={route.component}
              ></Route>
            )
          })
        }
        <Route component={NotFound404}/> 
			</Switch>
		</Template>
	</BrowserRouter>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
