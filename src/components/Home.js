import React, { Component } from "react";
import genericsFunctions from '../services/services';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import DailyTable from './DailyTable';
import CardDataHeader from './CardsHeaderData';
import LineGraph from './ChartData';



class Home extends Component {

    constructor() {
        super()
        this.state = { data: [], isLoading: true, rangoFechas: {}, showComponent: true, }

    }

    componentDidMount() {

        this.getData();

    }

    getData() {

        this.setState({ isLoading: true })

        let funciones = new genericsFunctions();
        let retrieve = funciones.getDataforBars();

        retrieve.then(dataResult => {

            console.log(dataResult);
            this.setState({ data: dataResult, isLoading: false })
        });
    }


    renderTableData() {

        if (this.state.data && this.state.data.length > 0) {
            return (this.state.data || []).map((x, index) => {
                return (

                    <li key={index.toString()}>
                        {x.Fecha}: {x.Casos}
                    </li>

                )

            })
        }
        else {

            if (this.state.isLoading) {
                return (

                    <div className="fixed-bottom">
                        cargando...
                    </div>

                )
            }
            else {
                return (

                    <div className="fixed-bottom">
                        No hay datos...
                    </div>

                )
            }
        }
    }

    render() {

        return (

            <div className="App">

                <div className="container">
                    <div className="row">
                        <br></br>
                        <br></br>

                    </div>
                    <div className="row">
                        <CardDataHeader></CardDataHeader>
                    </div>

                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <h2 align="center" className="tituloTabla">Situacion</h2>
                            <DailyTable></DailyTable>
                        </div>
                        <div className="d-none d-md-block d-lg-block">
                            <h1>Historico</h1>
                            <h2>{this.state.rangoFechas.FechaInicio} - {this.state.rangoFechas.FechaFin}
                            </h2>
                            <LineGraph></LineGraph>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-12 divFooter">

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <strong>Importante:</strong> Toda la informacion mostrada en esta pagina web son de las fuentes oficiales de:
                            <a rel="noopener noreferrer" target="_blank" href="https://covid19.isciii.es/">https://covid19.isciii.es/</a>
                            <br></br>
                            <Link to="/ProcesamientoInfo">Aqui</Link> te contamos como procesamos y almacenamos toda la informacion para luego presentarla Covid19-España
                            <br></br>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-12 divFooter">


                            <br></br>
                            <Link to="/Politicas">Politicas de Privacidad</Link>

                            <p className="text-center">
                                <small className="text-center">All rights reserved</small>

                            </p>


                        </div>
                    </div>


                </div>

                {/* {this.state.showComponent && <AvisoCookies hideOverlay={this.hide_overlay} />}
       */}
            </div>


        )

    }

}

export default Home;