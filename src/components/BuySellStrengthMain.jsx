import React from 'react'
import {connect} from 'react-redux';
import {Layout} from 'antd'
import CurrentDeal from './CurrentDeal'

const {Content} = Layout;


class BuySellStrengthMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
        time: Date.now()
      }), 60000
    )
  }

  render() {
    let t = 0;
    if (this.state.time) {
      t = this.state.time;
    }
    let url1 = "http://www.surprice3c.com:8000/static/bs_TX00.html?" + t;
    let url2 = "http://www.surprice3c.com:8000/static/bs_MTX00.html?" + t;
    let url3 = "http://www.surprice3c.com:8000/static/bs_2330.html?" + t;
    let url4 = "http://www.surprice3c.com:8000/static/bs_2317.html?" + t;

    return (
      <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 800}}>
        <CurrentDeal/>

        <object type="text/html" data={url1} width="530px"
                height="320px"
                style={{overflow: 'hidden', border: '2px ridge blue'}}>
        </object>
        <object type="text/html" data={url2} width="530px"
                height="320px"
                style={{overflow: 'hidden', border: '2px ridge blue'}}>
        </object>
        <object type="text/html" data={url3} width="530px"
                height="320px"
                style={{overflow: 'hidden', border: '2px ridge blue'}}>
        </object>
        <object type="text/html" data={url4} width="530px"
                height="320px"
                style={{overflow: 'hidden', border: '2px ridge blue'}}>
        </object>
      </Content>
    )
  }

}

const mapStateToProps = store => (
  {}
);

export default connect(mapStateToProps, null)(BuySellStrengthMain)

