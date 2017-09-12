import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Layout, Button } from 'antd';

const antContent = Layout.Content;

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
      <antContent >
        <Link to="/test">link to test</Link>

        <Button type="primary" onClick={() => this.handleClickButton()}>addTest</Button>
        <h1>Index</h1>
      </antContent>
    )
  }
}

const mapStateToProps = store => (
  {
    testReducer: store.testReducer
  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
