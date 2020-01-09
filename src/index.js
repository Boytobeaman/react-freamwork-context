import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux/reducer';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Template from './MainPage/index.js';
import NotFound404 from './404/index.js';

import * as serviceWorker from './serviceWorker';
import { routes, APP_URL_NAME } from './config/router'

import './index.css';
import './scss/main.scss';

const createRedirect = to => () => <Redirect to={to} />

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
	<Provider store={store}>
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
          <Route path="/" exact={true} component={createRedirect(APP_URL_NAME)} />
          <Route component={NotFound404}/> 
        </Switch>
      </Template>
    </BrowserRouter>
  </Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
