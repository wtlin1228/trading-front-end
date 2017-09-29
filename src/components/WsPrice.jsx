import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import { Row, Col, Card } from 'antd'
import Websocket from 'react-websocket'

import * as actionCreators from '../actions'

class WsPrice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {price: -1, datetime: '?', open_price: -1},
      symbol: props.symbol
    }
  }

  handleData(data) {
    let result = JSON.parse(data);
    console.log(result);
    this.setState({data: result});
  }

  render() {
    let wsUrl = 'ws://www.surprice3c.com:8000/prices/' + this.state.symbol;
    let price_change = parseFloat((this.state.data.price - this.state.data.open_price).toFixed(2));
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
      <Col xs={24} sm={24} md={2} lg={2} xl={2}>
        <Card title={this.state.symbol} bordered={true}>
          <Websocket url={wsUrl} onMessage={this.handleData.bind(this)}/>
          <div style={colorRedGreen(price_change, red, green)}> {this.state.data.price} </div>
          <span style={colorRedGreen(price_change, red, green)}>
              {arrowUpDown(price_change)}{price_change} / {price_change_percent}&#37;
          </span>
        </Card>
      </Col>  
    )
  }
}

const mapStateToProps = store => (
  {
    collapsedReducer: store.collapsedReducer
  }
);

export default connect(mapStateToProps, actionCreators)(WsPrice)

