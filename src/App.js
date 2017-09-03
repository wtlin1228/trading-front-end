import React, { Component } from 'react';
var TradingHeader = require('./components/TradingHeader')
var TradingFooter = require('./components/TradingFooter')
var CurrentDeal = require('./components/CurrentDeal');
//import {TradingHeader} from './components/TradingHeader';
//import {TradingFooter} from './components/TradingFooter';
//import {CurrentDeal} from './components/CurrentDeal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentDeal />
      </div>
    );
  }
}

export default App;
