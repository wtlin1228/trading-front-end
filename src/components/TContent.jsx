import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Button} from 'antd'

import BlueChipsTrendBar from '../components/BlueChipsTrendBar'
import OptionsMajorPositionBar from '../components/OptionsMajorPositionBar'
import Ticker from '../components/Ticker'

const { Content } = Layout;


class TContent extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 800 }}>
        <BlueChipsTrendBar/>
        <OptionsMajorPositionBar/>
        <Ticker/>
      </Content>
    )
  }
}

const mapStateToProps = store => (
  {
    
  }
)

export default connect(mapStateToProps, null)(TContent)

