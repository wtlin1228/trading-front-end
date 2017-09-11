import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

import * as actionCreators from '../actions'

import 'antd/dist/antd.css'
import { Button } from 'antd'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    this.props.addTest('123321')
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <Link to="/">lnk to index</Link>
           
        <Button type="primary" onClick={() => this.handleClickButton()}>addTest</Button>
        <h1>Test</h1>
      </div>   
      
    )
  }
}

const mapStateToProps = store => (
  {
    testReducer: store.testReducer,
  }
)

export default connect(mapStateToProps, actionCreators)(Test)