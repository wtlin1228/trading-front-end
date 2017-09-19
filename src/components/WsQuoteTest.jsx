import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import Websocket from 'react-websocket'

import * as actionCreators from '../actions'

class WsQuoteTest extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        quote: ''
      }
  }

  handleData(data) {
    let result = JSON.parse(data);
    console.log(result)
    this.setState({quote: result});
  }

  render() {
    let quote = 'symbol: ' + this.state.quote.symbol + ' price: ' + this.state.quote.price + ' datetime: ' +this.state.quote.datetime
    return (
      <div>
        quote: <strong>{quote}</strong>
        <Websocket url='ws://www.surprice3c.com:8000/prices'
              onMessage={this.handleData.bind(this)}/>
      </div>
    )
  }
}

const mapStateToProps = store => (
  {
    collapsedReducer: store.collapsedReducer
  }
)

export default connect(mapStateToProps, actionCreators)(WsQuoteTest)

