import React from 'react';
import {Col, Popover, Button} from 'antd';

import HeaderMenuInline from './HeaderMenuInline'


class HeaderPopover extends React.Component {
  constructor() {
    super();

  }

  render() {
    const hamburgerMenuStyle = {
      'background': 'none',
      'border': 'none',
      'display': 'inline-block',
      'position': 'fixed',
      'right': '0px',
      'top': '18px',
      'zIndex': '1000',
    };

    const iconBarStyle = {
      'backgroundColor': '#616161',
      'display': 'block',
      'height': '4px',
      'margin': '0 auto 4px',
      'width': '30px',
    };

    const popover = [
      <Popover
        placement="bottomRight"
        content={<HeaderMenuInline/>}
        trigger="click"
      >
        <Button style={hamburgerMenuStyle}>
          <span style={iconBarStyle}></span>
          <span style={iconBarStyle}></span>
          <span style={iconBarStyle}></span>
        </Button>
      </Popover>
    ];

    return (
      <Col>
        {popover}
      </Col>
    );
  }
}

export default HeaderPopover