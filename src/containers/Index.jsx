import React from 'react';
import Responsive from 'react-responsive';

import Header from '../components/Header'
import Footer from '../components/Footer'
import IndexMain from '../components/IndexMain'
import MobileLayout from '../components/mobile/MobileLayout'

class Index extends React.Component {
  render() {

    const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
    const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
    const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;
    const Default = ({ children }) => <Responsive minWidth={768} children={children} />;

    return (
      <div className="layout ant-layout">
        <Desktop>
          <Header />
          <IndexMain />
          <Footer />
        </Desktop>

        <Tablet>
          <MobileLayout/>
        </Tablet>

        <Mobile>
          <MobileLayout/>
        </Mobile>
      </div>
    )
  }
}

export default Index