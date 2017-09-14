let React = require('react');
let HorizontalBar = require("react-chartjs-2").HorizontalBar;

class BlueChipsTrendBar extends React.Component {
    render() {
        const blueChipsTrend = {2330: {movement: 1700, buy: 1122, sell: 300, buyPrice: 212.5, sellPrice: 213},
                                2317: {movement: 500, buy: 650, sell: 954, buyPrice: 115, sellPrice: 115.5},
                                6505: {movement: -270, buy: 305, sell: 270, buyPrice: 104.5, sellPrice: 105}
                               }
        const barChartData = {
            labels: Object.keys(blueChipsTrend).map( (key, val)=> key),
            datasets: [
                { 
                    label: 'Buy',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    data: Object.keys(blueChipsTrend).map((key)=> blueChipsTrend[key].buy)
                }, 
                {
                    label: 'Sell',
                    backgroundColor: 'rgba(255,99,255,0.2)',
                    data: Object.keys(blueChipsTrend).map((key)=> -blueChipsTrend[key].sell)
                }] 
        }
        const options = {
            responsive: true,
            scales: {xAxes: [{stacked: true}],
                     yAxes: [{stacked: true}] }

        }
        console.log(Object.keys(blueChipsTrend).map((key, val)=> val))
        console.log('here');
        console.log(blueChipsTrend);
        console.log(barChartData);
        return (
            <HorizontalBar data={barChartData} options={options} height="30" />
        )
    }
}

module.exports = BlueChipsTrendBar;