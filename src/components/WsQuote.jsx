import React from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import Websocket from 'react-websocket'

import * as actionCreators from '../actions'

class WsQuote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            symbol: props.symbol
        }
    }

    handleData(data) {
        let result = JSON.parse(data);
        console.log(result);
        this.setState({data: result});
    }

    render() {
        let dispData = this.state.symbol + " " + this.state.data.price + " " + this.state.data.datetime;
        let wsUrl = 'ws://www.surprice3c.com:8000/prices/' + this.state.symbol;
        return (
            <div>
                <strong>{dispData}</strong>
                <Websocket url={wsUrl}
                           onMessage={this.handleData.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = store => (
    {
        collapsedReducer: store.collapsedReducer
    }
);

export default connect(mapStateToProps, actionCreators)(WsQuote)

