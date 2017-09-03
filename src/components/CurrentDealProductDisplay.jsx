var React = require('react');
class CurrentDealProductDisplay extends React.Component {
    render() {
        let diff = this.props.product.diff;
        let lot_diff = null;
        let count_diff = null;
        let avg_diff = null;
        let disp_date = null;
        if (diff) {
            disp_date = this.props.product.date.replace('+08:00', '').replace('T', ' ');
            lot_diff = diff.lot_diff;
            count_diff = diff.count_diff;
            avg_diff = diff.avg_diff.toFixed(2);
        }
        const colorBackground = (diff) => {
            const LargerThanZero = {
                color: 'red',
            }
            const LesserThanZero = {
                color: 'green',
            }
            return diff>=0 ? LargerThanZero : LesserThanZero;
        }
        return (
            <div>
                <table>
                <tr>
                  <td>  </td>
                  <td> {this.props.productName} </td>
                </tr>
                <tr>
                  <td> 時間 </td>
                  <td> {disp_date} </td>
                </tr>
                <tr>
                  <td> 成交價 </td>
                  <td> {this.props.product.price} </td>
                </tr>
                <tr>
                  <td> 口差 </td>
                  <td style={colorBackground(lot_diff)}> {lot_diff} </td>
                </tr>
                <tr>
                  <td> 筆差 </td>
                  <td style={colorBackground(count_diff)}> {count_diff} </td>
                </tr>
                <tr>
                  <td> 均差 </td>
                  <td style={colorBackground(avg_diff)}> {avg_diff} </td>
                </tr>
                </table>
            </div>
        )
    }
}

module.exports = CurrentDealProductDisplay;
