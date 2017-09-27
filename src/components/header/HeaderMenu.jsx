import React from 'react';
import {Col, Menu, Icon} from 'antd'
import {Link} from "react-router-dom"

const {SubMenu} = Menu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderMenu extends React.Component {
  constructor() {
    super();

  }

  render() {
    const logoStyle = {
      'width': '120px',
      'height': '31px',
      'background': '#333',
      'border-radius': '6px',
      'margin': '16px 24px 16px 0',
      'float': 'left',
    };

    const menuStyle = {
      'position': 'relative',
      'float': 'right',
      'lineHeight': '64px',
    };

    const textStyle = {
      'textAlign': 'center',
      'fontSize': '21px',
      'color': '#ffffff',
      'margin': '-16px',
    };

    const menu = [
      <Menu
        mode="horizontal"
        theme="dark"
        style={menuStyle}
      >
        <Menu.Item key="mail">
          <Link to='/layout'/>
          <Icon type="mail"/>Go to test Layout
        </Menu.Item>
        <Menu.Item key="app">
          <Link to='/trading'/>
          <Icon type="appstore"/>Trading
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting"/>Navigation Three - Submenu</span>}>
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
      <Col>
        <div className="logo" style={logoStyle}>
          <Link to='/'>
            <p style={textStyle}>
              Seafood AI
            </p>
          </Link>
        </div>
        {menu}
      </Col>
    );
  }
}

export default HeaderMenu
