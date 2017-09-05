let React = require('react');

class CurrentDealProductDisplay extends React.Component {
    render() {
        let prd = this.props.product;
        if (!prd) {
            return (
                <div/>
            )
        }

        const prdName = prd.stock_name;
        const diff = prd.diff;
        const prdPrice = prd.price;
        const dispDate = prd.date.substring(11, 19);

        const diffLot = diff.lot_diff;
        const diffCount = diff.count_diff;
        const diffAvg = diff.avg_diff.toFixed(2);
        const diffLotBig = diff.lot_diff_big;
        const diffCountBig = diff.count_diff_big;
        const diffAvgBig = diff.avg_diff_big.toFixed(2);

        const colorRedOrGreen = (value) => {
            const LargerThanZero = {
                'color': 'red',
            };
            const LesserThanZero = {
                'color': 'green',
            };
            return value >= 0 ? LargerThanZero : LesserThanZero;
        };

        const tdValue = (value, autoColor) => {
            if (autoColor) {
                return (
                    <td style={colorRedOrGreen(value)}> {value} </td>
                )
            }
            return (<td> {value} </td>)
        };

        const trRowValue = (value, autoColor) => {
            return (
                <tr style={{'font-weight': 'bold', 'height': 30}}>
                    {tdValue(value, autoColor)}
                </tr>)
        };

        return (
            <table>
                <tbody style={{'textAlign': 'center'}}>
                {trRowValue(prdName, false)}
                {trRowValue(dispDate, false)}
                {trRowValue(prdPrice, false)}
                {trRowValue(diffLot, true)}
                {trRowValue(diffCount, true)}
                {trRowValue(diffAvg, true)}
                {trRowValue(diffLotBig, true)}
                {trRowValue(diffCountBig, true)}
                {trRowValue(diffAvgBig, true)}
                </tbody>
            </table>
        )
    }
}

module.exports = CurrentDealProductDisplay;
