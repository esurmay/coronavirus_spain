import React, { Component } from 'react';
import DailyTable from './DailyTable';

class CasosDiarios extends Component {




    render() {
        return (

            <div>


                <div className="jumbotron text-center d-block d-md-none d-lg-none card-bodyTotales">
                    <br></br>
                    <br></br>
                    <h1>Casos diarios</h1>
                    <p className="text-justify"></p>
                </div>

                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h2 align="center" className="tituloTabla">Situacion</h2>
                            <DailyTable></DailyTable>
                        </div>
                    
                    </div>

                </div>

            </div>


        )
    }

}


export default CasosDiarios;