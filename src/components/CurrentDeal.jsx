let React = require('react');
let CurrentDealProductDisplay = require('./CurrentDealProductDisplay');
let CurrentDealColumnHead = require('./CurrentDealColumnHead');


class CurrentDeal extends React.Component {
    constructor() {
        super();
        this.PRODUCT_LIST = ['TX00', 'MTX00', 'TE00', 'TF00',
            '0050', '2330', '2317', '6505', '2412', '3008'];
        this.state = {
            productNameTable: {},
        };

        this.checkStatus = this.checkStatus.bind(this);
        this.parseJSON = this.parseJSON.bind(this);
        this.updateBS = this.updateBS.bind(this);
        this.updateProductNameTable = this.updateProductNameTable.bind(this);
    }

    componentDidMount() {
        console.log('mount');
        const SRCURL = 'http://www.surprice3c.com:8000';
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
        };

        this._interval = window.setInterval(fetchData, 1000);
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
        if (response === undefined) return;
        return response.json();
    }

    updateBS(data) {
        try {
            let stockName = this.state.productNameTable[data.stock_symbol];
            if(!stockName){
                stockName = data.stock_symbol
            }
            let dd = {
                bs: data.bs,
                diff: data.diff,
                date: data.date.end,
                price: data.price,
                stock_symbol: data.stock_symbol,
                stock_name: stockName
            };
            this.setState({[ data.stock_symbol]: dd});
        }
        catch (err) {
            console.log(err);
        }
    }

    updateProductNameTable(data) {
        try {
            if (data !== undefined) {
                window.clearInterval(this._getProductNameTableInterval);
            }
            let newState = Object.assign({}, this.state);
            newState['productNameTable'] = data;
            this.setState(newState);
        }
        catch (err) {
            console.log(err);
        }
    }


    render() {

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td><CurrentDealColumnHead/></td>
                        <td><CurrentDealProductDisplay product={this.state["TX00"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["MTX00"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["TE00"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["TF00"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["0050"]}/></td>
                    </tr>
                    <tr>
                        <td><CurrentDealColumnHead/></td>
                        <td><CurrentDealProductDisplay product={this.state["2330"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["2317"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["6505"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["2412"]}/></td>
                        <td><CurrentDealProductDisplay product={this.state["3008"]}/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = CurrentDeal;
