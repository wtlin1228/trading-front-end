import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import {Button, Row, Col, Card} from 'antd'
import WsQuoteAll from './WsQuoteAll'
import WsQuote from './WsPrice'
import WsBs from './WsBs'


const Background = "../../static/img/cover.jpg"
// http://localhost:8888/static/img/cover.jpg
const innerHeight = window.innerHeight

const coverStyle = {
  margin: "-10px",
  width: "100%",
  height: (innerHeight - 64) + 'px',
  border: "0px",
  backgroundImage: "url(" + Background + ")",
  display: "table",
  position: "relative",
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  backgroundSize: "cover",
  OBackgroundSize: "cover",
}

const textStyle = {
  color: "white",
  fontSize: "50px",
  textAlign: "center",
  padding: (innerHeight / 2) - 64
}

const wsPriceSectionStyle = {
  margin: "10px",
  padding: "10px"
}

class IndexMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    this.props.addTest('123321')
  }

  render() {
    let traceQuoteSymbols = ['TX00', 'MTX00', '2330', '2317', '3008',
      'TX110300J7', 'TX110350J7', 'TX110400J7', 'TX110300V7', 'TX110350V7', 'TX110400V7'];
    let wsPriceList = traceQuoteSymbols.map((sym) => <WsQuote symbol={sym} key={sym.id}/>);
    let wsBsList = traceQuoteSymbols.map((sym) => <WsBs symbol={sym} key={sym.id}/>);
    return (
      <div>
        <section style={coverStyle}>
          <h1 style={textStyle}>Hi, trading ai</h1>
        </section>

        <section style={wsPriceSectionStyle}>
          <Row type="flex" justify="center">
            {wsPriceList}
          </Row>   
        </section>

        <div className="ant-layout-content" style={{padding: '20px 50px'}}>
          <table>
            <tbody>
            <tr>{wsBsList}</tr>
            </tbody>
          </table>
        </div>
        <div className="ant-layout-content" style={{padding: '20px 50px'}}>
          <WsQuoteAll/>
        </div>
      </div>

    )
  }
}

const mapStateToProps = store => (
  {
    testReducer: store.testReducer
  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
