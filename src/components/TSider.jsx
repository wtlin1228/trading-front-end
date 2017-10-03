import React from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import * as actionCreators from '../actions'
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
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
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

  handleMenuClick(e) {
    this.props.navigate_trading_page(e.key);
  }

  handleLogoClick() {
    this.props.navigate_trading_page('');
  }

  render() {
    const logoStyle = {
      'height': '32px',
      'background': '#333',
      'borderRadius': '6px',
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
          <Link to='/' onClick={this.handleLogoClick}>
            <p style={textStyle}>
              {this.state.logoText}
            </p>
          </Link>
        </div>
        <Menu
          theme="dark"
          onClick={this.handleMenuClick}
          selectedKeys={this.props.navigateTradingPageReducer.current}
          mode="inline"
        >
          <Menu.Item key="buy-sell-strength">
            <Link to='/trading/buy-sell-strength'/>
            <Icon type="area-chart"/>
            <span>買賣力差</span>
          </Menu.Item>
          <Menu.Item key="blue-chip-stocks">
            <Link to='/trading/blue-chip-stocks'/>
            <Icon type="pie-chart"/>
            <span>權值股動向</span>
          </Menu.Item>
          <Menu.Item key="chip-analysis">
            <Link to='/trading/chip-analysis'/>
            <Icon type="dot-chart"/>
            <span>籌碼分析</span>
          </Menu.Item>
          <Menu.Item key="options">
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

const mapStateToProps = store => (
  {
    navigateTradingPageReducer: store.navigateTradingPageReducer,
  }
)

export default connect(mapStateToProps, actionCreators)(TSider)


