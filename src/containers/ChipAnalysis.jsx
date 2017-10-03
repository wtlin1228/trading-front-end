import React from 'react'
import {connect} from 'react-redux';

import '../themes/trading.css'

import {Layout} from 'antd';
import Footer from "../components/Footer";
import ChipAnalysisMain from "../components/ChipAnalysisMain";
import TSider from "../components/TSider";

TSider.__ANT_LAYOUT_SIDER = true;


class ChipAnalysis extends React.Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <TSider/>
        <Layout>
          <header className="ant-layout-header" style={{background: '#fff', padding: 0}}/>
          <ChipAnalysisMain/>
          <Footer/>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = store => (
  {}
);

export default connect(mapStateToProps, null)(ChipAnalysis)