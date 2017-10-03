import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import rootSaga from './sagas'
import Index from './containers/Index'
import Test from './containers/Test'
import Trading from './containers/Trading'
import BlueChipStocks from './containers/BlueChipStocks'
import BuySellStrength from './containers/BuySellStrength'
import ChipAnalysis from './containers/ChipAnalysis'
import Options from './containers/Options'

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/test" component={Test}/>
          <Route exact path="/trading" component={Trading}/>
          <Route path="/trading/blue-chip-stocks" component={BlueChipStocks}/>
          <Route path="/trading/buy-sell-strength" component={BuySellStrength}/>
          <Route path="/trading/chip-analysis" component={ChipAnalysis}/>
          <Route path="/trading/options" component={Options}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)