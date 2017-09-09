let React = require('react');
let TradingHeader = require('./components/TradingHeader');
let TradingFooter = require('./components/TradingFooter');
let CurrentDeal = require('./components/CurrentDeal');

class App extends React.Component {
  render() {
    return (
      <div>
        <CurrentDeal />
        <TradingFooter />
      </div>
    )
  }
}
export default App;
