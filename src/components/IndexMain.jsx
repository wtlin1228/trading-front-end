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
};

const textStyle = {
  color: "white",
  fontSize: "50px",
  textAlign: "center",
  padding: (innerHeight / 2) - 64
};

const wsPriceSectionStyle = {
  margin: "10px",
  padding: "10px"
};

const featureSectionStyle = {
  padding: "30px",
  backgroundColor: "#fff"
};

class IndexMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    this.props.addTest('123321')
  }

  render() {
    let traceQuoteSymbols = ['TSEA', 'TX00', 'MTX00', '2330', '2317', '3008',
      'TX110300J7', 'TX110350J7', 'TX110400J7', 'TX110300V7', 'TX110350V7', 'TX110400V7'];
    let wsPriceList = traceQuoteSymbols.map((sym) => <WsQuote symbol={sym} key={sym.id}/>);
    let wsBsList = traceQuoteSymbols.map((sym) => <WsBs symbol={sym} key={sym.id}/>);
    return (
      <div className="ant-layout-content">
        <section style={coverStyle}>
          <h1 style={textStyle}>Hi, trading ai</h1>
        </section>

        <section style={wsPriceSectionStyle}>
          <Row type="flex" justify="center">
            {wsPriceList}
          </Row>
        </section>

        <section style={featureSectionStyle}>
          <Row type="flex">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={{textAlign: "center"}}>
                <h1>Seafood AI FEATURES</h1>
                <h3>ai</h3>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
          </Row>
          <Row type="flex">
            <Col offset={2} xs={22} sm={22} md={22} lg={8} xl={8}>
              <div style={{padding: "10px"}}>
                <h1>Advanced Chart</h1>
                <h3>TradingViewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</h3>
                <div>seafood</div>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={12} xl={12}>
              <div style={{padding: "50px"}}>
                <img style={{width: "100%"}} src="../../static/img/1.png" alt=""/>
              </div>
            </Col>
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
