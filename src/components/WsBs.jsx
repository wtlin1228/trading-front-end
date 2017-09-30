import React from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import Websocket from 'react-websocket'

import * as actionCreators from '../actions'

class WsBs extends React.Component {
  constructor(props) {
    super(props);

    let sample_data =
      {
        "bs": {
          "buy_count": 0,
          "sell_count_big": 0,
          "buy_count_big": 0,
          "bs_count_ratio": 0.00,
          "bs_lot_ratio": 0.00,
          "sell_lot": 0,
          "sell_count": 0,
          "buy_lot": 0
        },
        "diff": {
          "avg_diff_big": 0.00,
          "lot_diff_big": 0,
          "avg_diff": 0.00,
          "count_diff": 0,
          "lot_diff": 0,
          "count_diff_big": 0
        },
        "price": 0.0,
        "date": {
          "end": "2017-01-01T00:00:00+08:00",
          "begin": "2017-01-01T00:00:00+08:00"
        },
        "stock_symbol": ""
      };

    this.state = {
      data: sample_data,
      symbol: props.symbol
    }
  }

  handleData(data) {
    let result = JSON.parse(data);
    console.log(result);
    if (!result.isEmpty()) {
      this.setState({data: result});
    }
  }

  render() {
    let wsUrl = 'ws://www.surprice3c.com:8000/bs/' + this.state.symbol;
    const border = {border: "1px solid black", display: "inline-block", padding: "5px"};
    const red = {color: 'red'};
    const green = {color: 'green'};
    const colorRedGreen = (val, red, green) => {
      return val >= 0 ? red : green;
    };
    const arrowUpDown = (val) => {
      return val >= 0 ? <span>&#9650;</span> : <span>&#9660;</span>;
    };

    let data = this.state.data;
    let prdName = data.stock_name;
    let diff = data.diff;
    let prdPrice = data.price;
    let dispDate = data.date.end.substring(11, 19);

    let diffLot = diff.lot_diff;
    let diffCount = diff.count_diff;
    let diffAvg = diff.avg_diff.toFixed(2);
    let diffLotBig = diff.lot_diff_big;
    let diffCountBig = diff.count_diff_big;
    let diffAvgBig = diff.avg_diff_big.toFixed(2);
    return (
      <td>
        <Websocket url={wsUrl} onMessage={this.handleData.bind(this)}/>
        <ul style={border}>
          <li> {this.state.symbol} </li>
          <li> {dispDate} </li>
          <li> {diffLot} </li>
          <li> {diffCount} </li>
          <li> {diffAvg} </li>
          <li> {diffLotBig} </li>
          <li> {diffCountBig} </li>
          <li> {diffAvgBig} </li>
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

export default connect(mapStateToProps, actionCreators)(WsBs)

