import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { Layout } from 'antd'

import '../themes/trading.css'

import TSider from '../components/TSider'
import THeader from '../components/THeader'
import TContent from '../components/TContent'

TSider.__ANT_LAYOUT_SIDER = true;

class Trading extends React.Component {
  render() {
    return (
      <Layout>
        <TSider />
        <Layout>
          <THeader />
          <TContent />
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = store => (
  {
    
  }
)

export default connect(mapStateToProps, null)(Trading)