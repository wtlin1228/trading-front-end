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
            productNameTable: {},
        };

        this.checkStatus = this.checkStatus.bind(this);
        this.parseJSON = this.parseJSON.bind(this);
        this.updateBS = this.updateBS.bind(this);
        this.updateProductNameTable = this.updateProductNameTable.bind(this);
    }

    componentDidMount() {
        console.log('mount');
        const SRCURL = 'http://www.surprice3c.com:8000'
        const APIURL = SRCURL + '/api';

        let query = '';
        const getBS = (product) => fetch(APIURL + '/bs/' + product + '/' + query, {
            accept: 'application/json',
            method: 'get',
        }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(this.updateBS);
        const getProductNameTable = () => fetch(APIURL + '/symbol-name', {
            accept: 'application/json',
            method: 'get',
        }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(this.updateProductNameTable);

        const fetchData = () => {
          this.PRODUCT_LIST.map(getBS);
        }
        
        this._interval = window.setInterval(fetchData, 2000);
        this._getProductNameTableInterval = window.setInterval(getProductNameTable, 1000);
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

    updateBS(data) {
        try{
          let newState = Object.assign({}, this.state);
          newState[data.stock_symbol].bs = data.bs;
          newState[data.stock_symbol].diff = data.diff;
          newState[data.stock_symbol].date = data.date.end;
          newState[data.stock_symbol].price = data.price;
          newState[data.stock_symbol].stock_symbol = data.stock_symbol;
          this.setState(newState);
        }
        catch(err){
          console.log(err);
        }
    }
    updateProductNameTable(data){
        try{
          console.log(data);
          if(data != undefined){
            window.clearInterval(this._getProductNameTableInterval);
          }
          let newState = Object.assign({}, this.state);
          newState['productNameTable'] = data;
          this.setState(newState);
        }
        catch(err){
          console.log(err);
        }
    }

    render() {
        return (
            <div>
                <table>
                  <tr>
                    <th><CurrentDealProductDisplay product={this.state["TX00"]} productName={this.state.productNameTable["TX00"]} /> </th>
                    <th><CurrentDealProductDisplay product={this.state["MTX00"]} productName={this.state.productNameTable["MTX00"]}/> </th>
                    <th><CurrentDealProductDisplay product={this.state["2330"]} productName={this.state.productNameTable["2330"]}/>  </th>
                    <th><CurrentDealProductDisplay product={this.state["2317"]} productName={this.state.productNameTable["2317"]}/>  </th>
                  </tr>
                </table>
            </div>
        )
    }
}

module
    .exports = CurrentDeal;
