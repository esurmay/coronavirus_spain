import React, { Component } from 'react'
import classes from '../styles/LineGraph.module.css';
import genericsFunctions from '../services/services';
import { Line } from 'react-chartjs-2';

export default class LineGraph extends Component {
    chartRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = { data: [], isLoading: true };
    }

    componentDidMount() {
        this.getData();

    }

    getData() {

        this.setState({ isLoading: true })

        let funciones = new genericsFunctions();
        let retrieve = funciones.getDataforBars();

        retrieve.then(dataResult => {

            let chartObject = this.createChart(dataResult);
            this.setState({ data: chartObject, isLoading: false })
        })


    }

    createChart(datos) {

        var chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(231,233,237)'
        };

        let fechas = datos.map((item) => item.Fecha);
        let activos = datos.map((item) => (item.Casos + item.CasosPCR) - item.Recuperados - item.Fallecidos);
        let casos = datos.map((item) => item.Casos + item.CasosPCR);
        let fallecidos = datos.map((item) => item.Fallecidos);
        let recuperados = datos.map((item) => item.Recuperados);
        let Months = [...fechas];

        let data = {
            type: "line",
            data: {

                labels: Months,
                datasets: [{
                    label: "Activos",
                    backgroundColor: chartColors.yellow,
                    borderColor: "yellow",
                    data: [...activos],
                    fill: false,
                },
                {
                    label: "Totales",
                    backgroundColor: chartColors.red,
                    borderColor: "red",
                    data: [...casos],
                    fill: false,
                }, {
                    label: "fallecidos",
                    fill: false,
                    backgroundColor: "black",
                    borderColor: "gray",
                    data: [...fallecidos],
                }, {
                    label: "recuperados",
                    fill: false,
                    backgroundColor: chartColors.green,
                    borderColor: "green",
                    data: [...recuperados],
                }]
            },
            options: this.chartOptions(),
        }

        return data;

    }

    chartOptions() {
        let options = {
            responsive: true,
            title: {
                display: false,
                text: 'historico'
            },
            tooltips: {
                mode: 'label',
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,

                }],
                yAxes: [{
                    display: true,

                }]
            }
        };
        return options;
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className={classes.graphContainer}>
                        <div >
                            <div className="comment br animate w80"></div>
                            <div className="comment br animate w80"></div>
                        </div>
                        <div >
                            <div className="comment br animate w80"></div>
                            <div className="comment br animate w80"></div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={classes.graphContainer}>
                    <Line data={this.state.data.data}></Line>
                </div>
            )
        }

    }
}
