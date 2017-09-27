import React from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import {Layout, Menu, Icon, Button} from 'antd'

import * as actionCreators from '../actions'

const {Header} = Layout;


class THeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickToggle = this.handleClickToggle.bind(this)
  }

  handleClickToggle() {
    this.props.clickToggle()
  }

  render() {
    return (
      <Header style={{background: '#fff', padding: 0}}>
        <Icon
          className="trigger"
          type={this.props.collapsedReducer ? 'menu-unfold' : 'menu-fold'}
          onClick={() => this.handleClickToggle()}
        />
      </Header>
    )
  }
}

const mapStateToProps = store => (
  {
    collapsedReducer: store.collapsedReducer
  }
)

export default connect(mapStateToProps, actionCreators)(THeader)

