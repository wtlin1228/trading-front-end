import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import {Button} from 'antd'
import BlueChipsTrendBar from '../components/BlueChipsTrendBar'
import OptionsMajorPositionBar from '../components/OptionsMajorPositionBar'
import WsQuoteAll from './WsQuoteAll'
import WsQuote from './WsQuote'
import Ticker from '../components/Ticker'

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
            <div className="ant-layout-content" style={{padding: '0 50px'}}>
                <Link to="/test">link to test</Link>
                <Link to="/trading">link to trading</Link>
                <Button type="primary" onClick={() => this.handleClickButton()}>addTest</Button>
                <h1>Index</h1>
                <table><tr>{wsQuoteList}</tr></table>
                <WsQuoteAll/>
                <BlueChipsTrendBar/>
                <OptionsMajorPositionBar/>
                <Ticker/>
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
