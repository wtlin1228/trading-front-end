let React = require('react');
let HorizontalBar = require("react-chartjs-2").HorizontalBar;

class BlueChipsTrendBar extends React.Component {
  render() {
    const symbolTable = {2330: "台積電", 2317: "鴻海", 6505: "台塑化"}
    const blueChipsTrend = {
      2330: {movement: 1700, buy: 1122, sell: 300, buyPrice: 212.5, sellPrice: 213},
      2317: {movement: 500, buy: 650, sell: 954, buyPrice: 115, sellPrice: 115.5},
      6505: {movement: -270, buy: 305, sell: 270, buyPrice: 104.5, sellPrice: 105}
    };
    const barChartData = {
      labels: Object.keys(blueChipsTrend).map((key, val) => symbolTable[key]),
      datasets: [
        {
          label: '買',
          backgroundColor: 'rgba(255,0,0,0.2)',
          data: Object.keys(blueChipsTrend).map((key) => -blueChipsTrend[key].buy)
        },
        {
          label: '賣',
          backgroundColor: 'rgba(0,255,0,0.2)',
          data: Object.keys(blueChipsTrend).map((key) => blueChipsTrend[key].sell)
        }]
    };
    const options = {
      responsive: false,
      scales: {
        xAxes: [{stacked: true}],
        yAxes: [{stacked: true}]
      }
    };
    return (
      <HorizontalBar data={barChartData} options={options} height="100" width="300"/>
    )
  }
}

module.exports = BlueChipsTrendBar;
