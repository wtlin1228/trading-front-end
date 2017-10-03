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

        const trRowValue = (value, autoColor, updated) => {
            if (updated) {
                const bgColor = (updated > 0) ? '#ffd6d3' : '#daffd8';
                return (
                    <tr style={{'font-weight': 'bold', 'height': 30,
                        'background-color': bgColor,
                        transition: 'all 300ms ease-out'}}>
                        {tdValue(value, autoColor)}
                    </tr>
                )
            }

            else {
                return (
                    <tr style={{'font-weight': 'bold', 'height': 30,
                        transition: 'all 300ms ease-in'}}>
                        {tdValue(value, autoColor)}
                    </tr>
                )
            }
        };

        return (
            <table>
                <tbody style={{'textAlign': 'center'}}>
                {trRowValue(prdName, false)}
                {trRowValue(dispDate, false, prd.updated)}
                {trRowValue(prdPrice, false, prd.updated)}
                {trRowValue(diffLot, true, prd.updated)}
                {trRowValue(diffCount, true, prd.updated)}
                {trRowValue(diffAvg, true, prd.updated)}
                {trRowValue(diffLotBig, true, prd.updated)}
                {trRowValue(diffCountBig, true, prd.updated)}
                {trRowValue(diffAvgBig, true, prd.updated)}
                </tbody>
            </table>
        )
    }
}

module.exports = CurrentDealProductDisplay;
