import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Button } from 'antd';
import BlueChipsTrendBar from "../components/BlueChipsTrendBar";
import OptionsMajorPositionBar from "../components/OptionsMajorPositionBar";


class IndexMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    this.props.addTest('123321')
  }

  render() {
    return (
      <div className="ant-layout-content" style={{ padding: '0 50px' }}>
        <Link to="/test">link to test</Link>
        <Link to="/trading">link to trading</Link>
        <Button type="primary" onClick={() => this.handleClickButton()}>addTest</Button>
        <h1>Index</h1>
        <BlueChipsTrendBar />
        <OptionsMajorPositionBar />
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
