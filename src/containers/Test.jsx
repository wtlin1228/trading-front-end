import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import {Layout, Menu, Icon, Button, Breadcrumb} from 'antd'
import TSider from '../components/TSider'

import '../themes/trading.css'

const {Header, Content, Footer, Sider} = Layout;

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
        <TSider/>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: this.state.windowHeight}}>
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = store => (
  {}
)

export default connect(mapStateToProps, null)(Test)
