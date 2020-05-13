import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import '../styles/ContainerDataHeader.css'
import genericsFunctions from '../services/services';


// get our fontawesome imports
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

class CardDataHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [], fechaUltima: "" };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {

        this.setState({ isLoading: true })

        let funciones = new genericsFunctions();
        let datos = [];
        let iteracion = 1;
        let fechaActual = new Date();

        for (let i = 0; i <= iteracion; i++) {

            fechaActual.setDate(fechaActual.getDate() - 1);

            datos = await funciones.getDataForHeaders(fechaActual);

            if (datos === undefined || datos.length === 0) {
                iteracion++;
            }
            i++;

        }

        let dataResult = [];

        let casos = 0;
        let casosPCR = 0;
        let activos = 0;
        let fallecidos = 0;
        let recuperados = 0;
        let Hospitalizados = 0;
        let UCI = 0;
        let Fecha = "";

        if (datos && datos.length > 0) {

            let last = datos[datos.length - 1];

            Fecha = last.Fecha;
            casos = last.Casos;
            casosPCR = last.CasosPCR;
            activos = (last.CasosPCR + last.Casos) - last.Recuperados - last.Fallecidos;
            fallecidos = last.Fallecidos;
            recuperados = last.Recuperados;
            Hospitalizados = last.Hospitalizados;
            UCI = last.UCI;
        }

        dataResult = [

            { route: "/FasesDesescalada", Fecha: Fecha, total: "Ver detalles...", Descripcion: "Fases de desescalada" },
            { route: "/Casos", Fecha: Fecha, total: "Ver detalles...", Descripcion: "Casos por dia" },
            { route: "/coronavirus_spain", Fecha: Fecha, total: casosPCR.toLocaleString(), Descripcion: "Total Casos" },
            { route: "/coronavirus_spain", Fecha: Fecha, total: recuperados.toLocaleString(), Descripcion: "Recuperados" },
            { route: "/coronavirus_spain", Fecha: Fecha, total: Hospitalizados.toLocaleString(), Descripcion: "Hospitalizados" },
            { route: "/coronavirus_spain", Fecha: Fecha, total: UCI.toLocaleString(), Descripcion: "UCI" },
            { route: "/coronavirus_spain", Fecha: Fecha, total: fallecidos.toLocaleString(), Descripcion: "Fallecidos" },


        ]


        this.setState({ data: dataResult, isLoading: false, fechaUltima: Fecha })

    }


    renderCardsHeaders() {

        if (this.state.data && this.state.data.length > 0) {

            let divStyle = {
                color: 'white',
            };

            return (this.state.data || []).map((x, index) => {

                if (x.Descripcion === "Casos Activos")
                    divStyle = { color: 'yellow' };
                else
                    divStyle = { color: 'white' };

                return (
                    <div key={index.toString()} className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <Link to={x.route}>
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="card-bodyTotales">
                                        <h4 className="">{x.Descripcion}</h4>
                                        <h5 className="card-text text-center">
                                            <strong>{x.total}</strong> 
                                            {/* | <span title={x.Fecha}><FontAwesomeIcon icon={faInfoCircle} style={divStyle} /> </span> */}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
        else {

            if (this.state.isLoading) {
                let fakeArray = [
                    { total: 0, Descripcion: "Total Casos" },
                    { total: 0, Descripcion: "Casos Activos" },
                    { total: 0, Descripcion: "Fallecidos" },
                    { total: 0, Descripcion: "Recuperados" }
                ];

                return (fakeArray).map((x, index) => {
                    return (
                        <div key={index.toString()} className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="card">
                                <div className="comentario br animatemore w100"></div>
                            </div>
                        </div>


                    )
                })
            }
            else {
                return (
                    <p>No hay Datos disponibles</p>
                )
            }
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-12 divFooter">

                        <br></br>
                        <br></br>
                        <h6>Ultima Actualización: {this.state.fechaUltima}</h6>
                        {/* <Link to="/Notes"><strong>Nota importante de pagina oficial</strong></Link> */}


                    </div>
                </div>
                <div className="row">


                    {this.renderCardsHeaders()}
                    <div className="col-xs-12 col-12">                      
                        <Link to="/Notes"><strong>Nota importante de pagina oficial</strong></Link>      
                        <br></br>
                        <br></br>
                    </div>
                    <div className="col-xs-12 col-12 divFooter d-none d-md-block d-lg-block">
                        <br></br>
                        <hr className="new1"></hr>
                        <br></br>
                    </div>
                   
                </div>
            </div>
        )
    }

}


export default CardDataHeader;