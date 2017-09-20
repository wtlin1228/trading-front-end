import React from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import Websocket from 'react-websocket'

import * as actionCreators from '../actions'

class WsQuote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {price: -1, datetime: '?', open_price: -1},
            symbol: props.symbol
        }
    }

    handleData(data) {
        let result = JSON.parse(data);
        if (result.open_price == undefined) {
            result.open_price = this.state.data.open_price;
        }
        console.log(result);
        this.setState({data: result});
    }

    render() {
        let wsUrl = 'ws://www.surprice3c.com:8000/prices/' + this.state.symbol;
        let price_change = this.state.data.price - this.state.data.open_price;
        let price_change_percent = (price_change / this.state.data.open_price * 100.0).toFixed(2);
        const border = {border: "1px solid black", display: "inline-block", padding: "5px"};
        const red = {color: 'red'};
        const green = {color: 'green'};
        const colorRedGreen = (val, red, green) => {
            return val >= 0 ? red : green;
        };
        const arrowUpDown = (val) => {
            return val >= 0 ? <span>&#9650;</span> : <span>&#9660;</span>;
        };
        return (
            <td>
                <Websocket url={wsUrl} onMessage={this.handleData.bind(this)}/>
                <ul style={border}>
                    <li> {this.state.symbol} </li>
                    <li style={colorRedGreen(price_change, red, green)}> {this.state.data.price} </li>
                    <span style={colorRedGreen(price_change, red, green)}>
                        {arrowUpDown(price_change)}{price_change} / {price_change_percent}&#37;
                    </span>
                </ul>
            </td>
        )
    }
}

const mapStateToProps = store => (
    {
        collapsedReducer: store.collapsedReducer
    }
);

export default connect(mapStateToProps, actionCreators)(WsQuote)

