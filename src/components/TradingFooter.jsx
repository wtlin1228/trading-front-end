let React = require('react');

class TradingFooter extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({
                time: Date.now()
            }), 60000
        )
    }

    render() {
        let t = 0;
        if (this.state.time) {
            t = this.state.time;
        }
        let url = "http://www.surprice3c.com:8000/static/stocks.html?" + t;
        return (
            <object type="text/html" data={url} width="600px"
                    height="600px"
                    style={{overflow: 'hidden', border: '2px ridge blue'}}>
            </object>
        )
    }
}

module.exports = TradingFooter;