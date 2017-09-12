import React from 'react';

import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IndexMain from '../components/IndexMain'

class Index extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Layout>
        <Header />
        <IndexMain />
        <Footer />
      </Layout>
      
    )
  }
}



export default Index