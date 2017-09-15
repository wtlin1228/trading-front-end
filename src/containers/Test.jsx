import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Button, Breadcrumb } from 'antd'

import '../themes/trading.css'

const { Header, Content, Footer, Sider } = Layout;

let innerHeight

class Test extends React.Component {
  state = {
    collapsed: false,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  updateDimensions() {
    console.log('resize')
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }


  componentWillMount() {
    innerHeight = window.innerHeight
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: this.state.windowHeight }}>
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = store => (
  {
    
  }
)

export default connect(mapStateToProps, null)(Test)
