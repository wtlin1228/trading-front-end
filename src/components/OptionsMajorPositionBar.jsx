let React = require('react');
let Bar = require("react-chartjs-2").Bar;

class OptionsMajorPositionBar extends React.Component {
    render() {
        const optionsMajorPositionC = { '10300C': {openLot: -12, openValue: -2364, averagePrice: 197},
                                        '10350C': {openLot: 121, openValue: 18755, averagePrice: 155},
                                        '10400C': {openLot: 1577, openValue: 168739, averagePrice: 107},
                                        '10450C': {openLot: 4717, openValue: 344341, averagePrice: 73},
                                        '10500C': {openLot: -928, openValue: -38048, averagePrice: 41},
                                        '10550C': {openLot: -114, openValue: -2280, averagePrice: 20},
                                        '10600C': {openLot: 451, openValue: 3608, averagePrice: 8}
                                     }
        const optionsMajorPositionP = { '10300P': {openLot: -12, openValue: -2364, averagePrice: 197},
                                        '10350P': {openLot: 121, openValue: 18755, averagePrice: 155},
                                        '10400P': {openLot: 1577, openValue: 168739, averagePrice: 107},
                                        '10450P': {openLot: 4717, openValue: 344341, averagePrice: 73},
                                        '10500P': {openLot: -928, openValue: -38048, averagePrice: 41},
                                        '10550P': {openLot: -114, openValue: -2280, averagePrice: 20},
                                        '10600P': {openLot: 451, openValue: 3608, averagePrice: 8}
                                     }
        const colorRedGreen = (val, red, green) => {
          return val>=0 ? red : green;
        };
        const barChartDataC = {
            labels: Object.keys(optionsMajorPositionC).map( (key)=> key),
            datasets: [
                { 
                    label: 'openLot',
                    yAxisID: 'Lot',
                    backgroundColor: Object.keys(optionsMajorPositionC).map((key)=> colorRedGreen(optionsMajorPositionC[key].openLot, 'rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)')),
                    data: Object.keys(optionsMajorPositionC).map((key)=> optionsMajorPositionC[key].openLot)
                }, 
                {
                    label: 'openValue',
                    yAxisID: 'Value',
                    backgroundColor: Object.keys(optionsMajorPositionC).map((key)=> colorRedGreen(optionsMajorPositionC[key].openValue, 'rgba(255, 150, 150, 1)', 'rgba(150, 255, 150, 1)')),
                    data: Object.keys(optionsMajorPositionC).map((key)=> optionsMajorPositionC[key].openValue)
                }] 
        }
        const barChartDataP = {
            labels: Object.keys(optionsMajorPositionP).map( (key)=> key),
            datasets: [
                { 
                    label: 'openLot',
                    yAxisID: 'Lot',
                    backgroundColor: Object.keys(optionsMajorPositionP).map((key)=> colorRedGreen(optionsMajorPositionP[key].openLot, 'rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)')),
                    data: Object.keys(optionsMajorPositionP).map((key)=> optionsMajorPositionP[key].openLot)
                }, 
                {
                    label: 'openValue',
                    yAxisID: 'Value',
                    backgroundColor: Object.keys(optionsMajorPositionP).map((key)=> colorRedGreen(optionsMajorPositionP[key].openValue, 'rgba(255, 150, 150, 1)', 'rgba(150, 255, 150, 1)')),
                    data: Object.keys(optionsMajorPositionP).map((key)=> optionsMajorPositionP[key].openValue)
                }] 
        }
        const options = {
            responsive: true,
            scales: {
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "Lot",
                    ticks:{
                        maxTicksLimit: 10,
                        sugggestedMax: 100,
                        beginAtZero: true
                    },
                    gridLines: {
                        offsetGridLines: false
                    }
                  }, {
                    type: "linear",
                    display: true,
                    position: "right",
                    id: "Value",
                    ticks:{
                        maxTicksLimit: 10,
                        sugggestedMax: 100,
                        beginAtZero: true
                    }
                  }
                ]
            }
        }
        return (
            <div>
              <Bar data={barChartDataC} options={options} height="100" />
              <Bar data={barChartDataP} options={options} height="100" />
            </div>
        )
    }
}

module.exports = OptionsMajorPositionBar;
