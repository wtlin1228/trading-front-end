import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import {Button} from 'antd'
import WsQuoteAll from './WsQuoteAll'
import WsQuote from './WsQuote'


const Background = "../../static/img/cover.jpg"
// http://localhost:8888/static/img/cover.jpg
const innerHeight = window.innerHeight

const coverStyle = {
  margin: "-10px",
  width: "100%",
  height : (innerHeight -64) + 'px',
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
  color:"white",
  fontSize: "50px",
  textAlign: "center",
  padding: (innerHeight / 2) - 64
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
            'TX410500I7', 'TX410550I7', 'TX410600I7', 'TX410500U7', 'TX410550U7', 'TX410600U7'];
        let wsQuoteList = traceQuoteSymbols.map((sym) => <WsQuote symbol={sym} key={sym}/>);
        return (
        <div>
          <section style={coverStyle}>
            <h1 style={textStyle}>Hi, trading ai</h1>
          </section>
          <div className="ant-layout-content" style={{padding: '0 50px'}}>
            {/*<Button type="primary" onClick={() => this.handleClickButton()}>addTest</Button>*/}
            <table><tr>{wsQuoteList}</tr></table>
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
