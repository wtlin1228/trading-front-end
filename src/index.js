import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Provider } from 'react-redux'
import { Button } from 'antd'

import configureStore from './store/configureStore'
import rootSaga from './sagas'
import Index from './containers/Index'
import Test from './containers/Test'

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/test" component={Test} />     
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)