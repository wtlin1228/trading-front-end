let React = require('react');
let Bar = require("react-chartjs-2").Bar;

class OptionsMajorPositionBar extends React.Component {

    absValue(dataDict, field) {
        let max = Math.max.apply(null, Object.keys(dataDict).map((key) => dataDict[key][field]));
        let min = Math.min.apply(null, Object.keys(dataDict).map((key) => dataDict[key][field]));
        return Math.max(Math.abs(max), Math.abs(min))
    }

    render() {
        const optionsMajorPositionC = {
            '10300C': {lot: -11, point: -1919, averagePrice: 197},
            '10350C': {lot: -39, point: -7226, averagePrice: 155},
            '10400C': {lot: -396, point: -55711, averagePrice: 107},
            '10450C': {lot: 3, point: -6279, averagePrice: 73},
            '10500C': {lot: 3789, point: 368386, averagePrice: 41},
            '10550C': {lot: -4872, point: 67514, averagePrice: 20},
            '10600C': {lot: -4391, point: -127749, averagePrice: 8}
        };
        const optionsMajorPositionP = {
            '10300P': {lot: 2319, point: 39094, averagePrice: 197},
            '10350P': {lot: 2933, point: 29322, averagePrice: 155},
            '10400P': {lot: 3641, point: 145741, averagePrice: 107},
            '10450P': {lot: 1014, point: 40117, averagePrice: 73},
            '10500P': {lot: 4940, point: -69266, averagePrice: 41},
            '10550P': {lot: -20632, point: -286099, averagePrice: 20},
            '10600P': {lot: 3487, point: 116352, averagePrice: 8}
        };
        const colorRedGreen = (val, red, green) => {
            return val >= 0 ? red : green;
        };
        const barChartDataC = {
            labels: Object.keys(optionsMajorPositionC).map((key) => key),
            datasets: [
                {
                    label: 'lot',
                    yAxisID: 'Lot',
                    backgroundColor: Object.keys(optionsMajorPositionC).map((key) => colorRedGreen(optionsMajorPositionC[key].lot, 'rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)')),
                    data: Object.keys(optionsMajorPositionC).map((key) => optionsMajorPositionC[key].lot)
                },
                {
                    label: 'point',
                    yAxisID: 'Point',
                    backgroundColor: Object.keys(optionsMajorPositionC).map((key) => colorRedGreen(optionsMajorPositionC[key].point, 'rgba(255, 150, 150, 1)', 'rgba(150, 255, 150, 1)')),
                    data: Object.keys(optionsMajorPositionC).map((key) => optionsMajorPositionC[key].point)
                }],
        };
        const barChartDataP = {
            labels: Object.keys(optionsMajorPositionP).map((key) => key),
            datasets: [
                {
                    label: 'lot',
                    yAxisID: 'Lot',
                    backgroundColor: Object.keys(optionsMajorPositionP).map((key) => colorRedGreen(optionsMajorPositionP[key].lot, 'rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)')),
                    data: Object.keys(optionsMajorPositionP).map((key) => optionsMajorPositionP[key].lot)
                },
                {
                    label: 'point',
                    yAxisID: 'Point',
                    backgroundColor: Object.keys(optionsMajorPositionP).map((key) => colorRedGreen(optionsMajorPositionP[key].point, 'rgba(255, 150, 150, 1)', 'rgba(150, 255, 150, 1)')),
                    data: Object.keys(optionsMajorPositionP).map((key) => optionsMajorPositionP[key].point)
                }]
        };

        let maxLot = Math.max(
            this.absValue(optionsMajorPositionC, 'lot'), this.absValue(optionsMajorPositionP, 'lot'));
        let maxPoint = Math.max(
            this.absValue(optionsMajorPositionC, 'point'), this.absValue(optionsMajorPositionP, 'point'));

        const options = {
            responsive: true,
            scales: {
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "Lot",
                    ticks: {
                        suggestedMax: maxLot,
                        suggestedMin: -maxLot
                    },
                    gridLines: {
                        display: true
                    }
                }, {
                    type: "linear",
                    display: false,
                    position: "right",
                    id: "Point",
                    ticks: {
                        suggestedMax: maxPoint,
                        suggestedMin: -maxPoint
                    },
                    gridLines: {
                        display: false
                    }
                }
                ]
            }
        };
        return (
            <div>
                <Bar data={barChartDataC} options={options} height="100"/>
                <Bar data={barChartDataP} options={options} height="100"/>
            </div>
        )
    }
}

module.exports = OptionsMajorPositionBar;
