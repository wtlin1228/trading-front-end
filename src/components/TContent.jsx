import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Button} from 'antd'

const { Content } = Layout;


class TContent extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 800 }}>
        Content
      </Content>
    )
  }
}

const mapStateToProps = store => (
  {
    
  }
)

export default connect(mapStateToProps, null)(TContent)

