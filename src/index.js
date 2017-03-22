import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout'
import App from './App';
import ServiceContainer from './containers/ServiceContainer'
import './index.css';
import './animate.css'
import './font-awesome/css/font-awesome.min.css'

/*const logger = createLogger()*/

const store = createStore(reducers, applyMiddleware( thunk ))

ReactDOM.render(
	<Provider store={store}>
  <Router history={ browserHistory }>
  	<Route path='/' component={ Layout }>
  		<IndexRoute component={ App } />
  		<Route path='services' component={ ServiceContainer } />
  	</Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
