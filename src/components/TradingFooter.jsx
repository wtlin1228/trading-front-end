var React = require('react');

class TradingFooter extends React.Component {
    render() {
        return (
                <object type="text/html" data="http://www.surprice3c.com:8000/static/stocks.html" width="100%" height="800">
                </object>
        )
    }
}

module.exports = TradingFooter;