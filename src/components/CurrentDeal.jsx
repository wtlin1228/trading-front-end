var React = require('react');
var CurrentDealProductDisplay = require('./CurrentDealProductDisplay');

class CurrentDeal extends React.Component {
    constructor() {
        super();
        this.PRODUCT_LIST = ['TX00', 'MTX00', '2330', '2317']
        this.state = {
            TX00: {stock_symbol: '', price: '', bs: '', diff: '', date:''},
            MTX00: {stock_symbol: '', price: '', bs: '', diff: '', date:''},
            2330: {stock_symbol: '', price: '', bs: '', diff: '', date:''},
            2317: {stock_symbol: '', price: '', bs: '', diff: '', date:''},
        };

        this.checkStatus = this.checkStatus.bind(this);
        this.parseJSON = this.parseJSON.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateBS = this.updateBS.bind(this);
    }

    componentDidMount() {
        console.log('mount');
        const APIURL = 'http://www.surprice3c.com:8000/api';

        let query = '';
        const getPrice = (product) => fetch(APIURL + '/prices/' + product + '/' + query, {
            accept: 'application/json',
            method: 'get',
        }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(this.updatePrice);
        const getBS = (product) => fetch(APIURL+'/bs/' + product + '/' + query, {
            accept: 'application/json',
            method: 'get',
        }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(this.updateBS);
        const fetchData = () => {
          this.PRODUCT_LIST.map(getPrice);
          this.PRODUCT_LIST.map(getBS);
        }

        this._interval = window.setInterval(fetchData, 1000);
    }

    checkStatus(response) {
        //console.log(response)
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            //const error = new Error(`HTTP Error, ${response.statusText}`);
            //error.status = response.statusText;
            //error.response = response;
            //console.log(error);
            //throw error;
        }
    }

    parseJSON(response) {
        if(response == undefined) return ;
        return response.json();
    }

    updatePrice(data) {
        try{
          let newState = Object.assign({}, this.state);
          newState[data.stock_symbol].price = data;
          newState[data.stock_symbol].stock_symbol = data.stock_symbol;
          this.setState(newState);
        }
        catch(err){
          console.log(err);
        }
    }

    updateBS(data) {
        let newState = Object.assign({}, this.state);
        try{
          newState[data.stock_symbol].bs = data.bs;
          newState[data.stock_symbol].diff = data.diff;
          newState[data.stock_symbol].date = data.date;
          newState[data.stock_symbol].stock_symbol = data.stock_symbol;
          this.setState(newState);
        }
        catch(err){
          console.log(err);
        }
    }

    render() {
        return (
            <div>
                <table htmlStyle="width:100%">
                  <tr>
                    <th><CurrentDealProductDisplay product={this.state["TX00"]}/> </th>
                    <th><CurrentDealProductDisplay product={this.state["MTX00"]}/> </th>
                    <th><CurrentDealProductDisplay product={this.state["2330"]}/>  </th>
                    <th><CurrentDealProductDisplay product={this.state["2317"]}/>  </th>
                  </tr>
                </table>
            </div>
        )
    }
}

module
    .exports = CurrentDeal;
