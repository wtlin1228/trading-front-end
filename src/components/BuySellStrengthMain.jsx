import React from 'react'
import {connect} from 'react-redux';
import {Layout} from 'antd'

const {Content} = Layout;


class BuySellStrengthMain extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 800}}>
        <p>
          Here is BuySellStrengthMain
        </p>
      </Content>
    )
  }
}

const mapStateToProps = store => (
  {}
)

export default connect(mapStateToProps, null)(BuySellStrengthMain)
