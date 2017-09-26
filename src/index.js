import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import rootSaga from './sagas'
import Index from './containers/Index'
import Test from './containers/Test'
import Trading from './containers/Trading'

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/test" component={Test} />
          <Route path="/trading" component={Trading} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)