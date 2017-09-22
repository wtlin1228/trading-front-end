import React from 'react';
import { Col, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderMenu extends React.Component {
  constructor() {
    super();

  }

  render() {
    const menuStyle = {
      'position': 'relative',
      'float': 'right',
      'lineHeight': '64px',
    };

    const menu = [
      <Menu
        mode={this.props.menuMode}
        theme="dark"
        style={menuStyle}
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
      <Col>
        {menu}
      </Col>
    );
  }
}

export default HeaderMenu
