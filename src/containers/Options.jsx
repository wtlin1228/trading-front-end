import React from 'react'
import {connect} from 'react-redux';

import '../themes/trading.css'

import {Layout} from 'antd';
import Footer from "../components/Footer";
import OptionsMain from "../components/OptionsMain";
import TSider from "../components/TSider";

TSider.__ANT_LAYOUT_SIDER = true;


class Options extends React.Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <TSider/>
        <Layout>
          <header className="ant-layout-header" style={{background: '#fff', padding: 0}}/>
          <OptionsMain/>
          <Footer/>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = store => (
  {}
);

export default connect(mapStateToProps, null)(Options)