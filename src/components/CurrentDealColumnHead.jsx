let React = require('react');

class CurrentDealColumnHead extends React.Component {
    render() {
        const columnHead = (str) => {
            return (
                <tr style={{'height': 30}}>
                    <td>{str}</td>
                </tr>
            )
        };

        return (<table style={{'table-layout': 'fixed', 'width': 100}}>
                {columnHead('')}
                {columnHead('時間')}
                {columnHead('成交價')}
                {columnHead('口差')}
                {columnHead('筆差')}
                {columnHead('均差')}
                {columnHead('口差(大單)')}
                {columnHead('筆差(大單)')}
                {columnHead('均差(大單)')}
            </table>
        )
    }
}

module.exports = CurrentDealColumnHead;
