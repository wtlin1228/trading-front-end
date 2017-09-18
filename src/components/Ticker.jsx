let React = require('react');

class Ticker extends React.Component {
    render() {
        const input = { name:"TAIEX", value: 10567, diff: -66, diffPct: 0.87 }
        const red = {color: 'red'};
        const green = {color: 'green'};
        const colorRedGreen = (val, red, green) => {
            return val >= 0 ? red : green;
        };
        const border = {border: "1px solid black", display: "inline-block", padding: "5px"};
        const arrowUpDown = (val) => {
            return val >=0 ? <span>&#9650;</span> : <span>&#9660;</span>;
        }
        return (
            <span>
            <ul style={border}>
                <li> {input.name} </li>
                <li> 
                    {input.value} 
                    <span style={ colorRedGreen(input.diff, red, green) }>
                        {arrowUpDown(input.diff)}{input.diff} {input.diffPct}&#37;
                    </span>
                </li>
            </ul>
            </span>
        )
    }
}

module.exports = Ticker;
