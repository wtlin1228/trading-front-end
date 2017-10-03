import React from 'react'
import {Link} from "react-router-dom"
import {Layout, Menu, Icon} from 'antd'

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;


class TSider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      logoText: 'Seafood AI',
    };

    this.onCollapse = this.onCollapse.bind(this);
    this.toggleLogoText = this.toggleLogoText.bind(this);
  }

  toggleLogoText(text) {
    if (text === 'SA') return 'Seafood AI';
    else return 'SA'
  }

  onCollapse(collapsed) {
    this.setState({
      collapsed,
      logoText: this.toggleLogoText(this.state.logoText),
    });
  }

  render() {
    const logoStyle = {
      'height': '32px',
      'background': '#333',
      'border-radius': '6px',
      'margin': '16px',
    };

    const textStyle = {
      'textAlign': 'center',
      'fontSize': '21px',
      'color': '#ffffff',
    };

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" style={logoStyle}>
          <Link to='/'>
            <p style={textStyle}>
              {this.state.logoText}
            </p>
          </Link>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to='/trading/buy_sell_strength'/>
            <Icon type="area-chart"/>
            <span>買賣力差</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/trading/blue_chip_stocks'/>
            <Icon type="pie-chart"/>
            <span>權值股動向</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/trading/chip_analysis'/>
            <Icon type="dot-chart"/>
            <span>籌碼分析</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to='/trading/options'/>
            <Icon type="bar-chart"/>
            <span>選擇權分析</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user"/><span>User</span></span>}
          >
            <Menu.Item key="5">Bill</Menu.Item>
            <Menu.Item key="6">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team"/><span>Team</span></span>}
          >
            <Menu.Item key="7">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file"/>
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default TSider

