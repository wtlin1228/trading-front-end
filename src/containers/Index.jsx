import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
import IndexMain from '../components/IndexMain'

class Index extends React.Component {
  render() {
    return (
      <div className="layout ant-layout">
        <Header/>
        <IndexMain/>
        <Footer/>
      </div>
    )
  }
}

export default Index