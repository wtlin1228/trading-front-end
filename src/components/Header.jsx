import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const antHeader = Layout.Header;

class Header extends React.Component {
  render() {
    return (

      <antHeader >
        <h1>Header</h1>
      </antHeader>
    )
  }
}

export default Header