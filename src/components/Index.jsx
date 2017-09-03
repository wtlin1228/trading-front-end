var React = require('react');
var TradingHeader = require('TradingHeader');
var TradingFooter = require('TradingFooter');
var CurrentDeal = require('CurrentDeal');

class Index extends React.Component {
  render() {
    return (
      <div>
        <TradingHeader />
        <CurrentDeal />
        <TradingFooter />
      </div>
    )
  }
}

module.exports = Index;
