import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const antFooter = Layout.Footer;

class Footer extends React.Component {
  render() {
    return (
      <antFooter >
        <h1>Footer</h1>
      </antFooter>
    )
  }
}

export default Footer