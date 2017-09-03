var React = require('react');

class CurrentDealProductDisplay extends React.Component {
    render() {
        let diff = this.props.product.diff;
        let lot_diff = null;
        let count_diff = null;
        let avg_diff = null;
        let disp_date = null;
        if (diff) {
            disp_date = this.props.product.price.datetime.replace('+08:00', '').replace('T', ' ');
            lot_diff = diff.lot_diff.toFixed(2);
            count_diff = diff.count_diff.toFixed(2);
            avg_diff = diff.avg_diff.toFixed(2);
        }
        return (
            <div>
                <table htmlAlign='left'>
                <tr>
                  <td> 代號 </td>
                  <td> {this.props.productName} </td>
                </tr>
                <tr>
                  <td> 時間 </td>
                  <td> {disp_date} </td>
                </tr>
                <tr>
                  <td> 成交價 </td>
                  <td> {this.props.product.price.price} </td>
                </tr>
                <tr>
                  <td> 口差 </td>
                  <td> {lot_diff} </td>
                </tr>
                <tr>
                  <td> 筆差 </td>
                  <td> {count_diff} </td>
                </tr>
                <tr>
                  <td> 均差 </td>
                  <td> {avg_diff} </td>
                </tr>
                </table>
            </div>
        )
    }
}

module.exports = CurrentDealProductDisplay;
