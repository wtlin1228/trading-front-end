import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Button} from 'antd'

const { Sider } = Layout;


class TSider extends React.Component {
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsedReducer}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span>nav 1</span>
            </Link>
            
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

const mapStateToProps = store => (
  {
    collapsedReducer: store.collapsedReducer
  }
)

export default connect(mapStateToProps, null)(TSider)

