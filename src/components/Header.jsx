import React from 'react';
import {Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;


class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      current: 'mail',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const headerStyle = {
      'marginBottom': '10px',
    };

    const logoStyle = {
      'width': '120px',
      'height': '31px',
      'background': '#333',
      'borderRadus': '6px',
      'margin': '16px 28px 16px 0',
      'float': 'left',
    };

    const menu = [
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
    ];

    return (
      <div className="ant-layout-header" style={headerStyle}>
        <div className="logo" style={logoStyle}/>
        {menu}
      </div>
    )
  }
}

export default Header