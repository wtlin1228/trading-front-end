import React from 'react';
import { Col, Popover, Button } from 'antd';

import HeaderMenu from './HeaderMenu'


class HeaderPopover extends React.Component {
  constructor() {
    super();

  }

  render() {
    const hamburgerMenuStyle = {
      'background': 'none',
      'border': 'none',
      'display': 'inline-block',
      'position': 'absolute',
      'right': '18px',
      'top': '18px',
    };

    const iconBarStyle = {
      'backgroundColor': '#22ff98',
      'display': 'block',
      'height': '4px',
      'margin': '0 auto 4px',
      'width': '30px',
    };

    const popover = [
      <Popover
        placement="bottomRight"
        content={<HeaderMenu menuMode="inline"/>}
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