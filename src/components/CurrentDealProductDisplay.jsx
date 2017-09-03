let React = require('react');

class CurrentDealProductDisplay extends React.Component {
    render() {
        let diff = this.props.product.diff;
        let lot_diff = null;
        let count_diff = null;
        let avg_diff = null;
        let lot_diff_big = null;
        let count_diff_big = null;
        let avg_diff_big = null;
        let disp_date = null;
        if (diff) {
            disp_date = this.props.product.date.substring(11, 19);
            lot_diff = diff.lot_diff;
            count_diff = diff.count_diff;
            avg_diff = diff.avg_diff.toFixed(2);
            lot_diff_big = diff.lot_diff_big;
            count_diff_big = diff.count_diff_big;
            avg_diff_big = diff.avg_diff_big.toFixed(2);
        }
        const colorRedOrGreen = (value) => {
            const LargerThanZero = {
                color: 'red',
            };
            const LesserThanZero = {
                color: 'green',
            };
            return value >= 0 ? LargerThanZero : LesserThanZero;
        };
        const colorBlue = {
            color: 'blue'
        };

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td/>
                        <td> {this.props.productName} </td>
                    </tr>
                    <tr>
                        <td>時間</td>
                        <td> {disp_date} </td>
                    </tr>
                    <tr>
                        <td>成交價</td>
                        <td style={colorBlue}> {this.props.product.price} </td>
                    </tr>
                    <tr>
                        <td>口差</td>
                        <td style={colorRedOrGreen(lot_diff)}> {lot_diff} </td>
                    </tr>
                    <tr>
                        <td>筆差</td>
                        <td style={colorRedOrGreen(count_diff)}> {count_diff} </td>
                    </tr>
                    <tr>
                        <td>均差</td>
                        <td style={colorRedOrGreen(avg_diff)}> {avg_diff} </td>
                    </tr>
                    <tr>
                        <td>口差(大單)</td>
                        <td style={colorRedOrGreen(lot_diff_big)}> {lot_diff_big} </td>
                    </tr>
                    <tr>
                        <td>筆差(大單)</td>
                        <td style={colorRedOrGreen(count_diff_big)}> {count_diff_big} </td>
                    </tr>
                    <tr>
                        <td>均差(大單)</td>
                        <td style={colorRedOrGreen(avg_diff_big)}> {avg_diff_big} </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = CurrentDealProductDisplay;
