import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import '../styles/ContainerDataHeader.css'
import genericsFunctions from '../services/services';


// get our fontawesome imports
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Notes extends Component {

 




    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Notas importantes</h1>
                    <p className="text-justify"></p>
                </div>
                <div className="container text-justify">
                    <div className="row">
                        <div className="col-xs-12 col-12">

                            <br></br>
                            <br></br>
                            <strong>Nota importante de pagina oficial:  <a rel="noopener noreferrer" target="_blank" href="https://covid19.isciii.es/">https://covid19.isciii.es/</a>
</strong>
                            <br></br>
                           
                            <br></br>
                            <br></br>

                            <p>El objetivo de los datos que se publican en esta web es saber el número de casos acumulados
                            a la fecha y que por tanto no se puede deducir que la diferencia entre un día y el anterior es el
                            número de casos nuevos ya que esos casos pueden haber sido recuperados de fechas anteriores.
                            Cualquier inferencia que se haga sobre las diferencias de un día para otro deben hacerse con
                              precaución y son únicamente la responsabilidad del autor.</p>
                            <ol>

                                <p>
                                   a)  Los datos de estas comunidades son datos de prevalencia (personas ingresadas a fecha de hoy).
                                    No reflejan el total de personas que han sido hospitalizadas o ingresadas en UCI  a lo largo 
                                    del periodo de notificación  <strong>(CL(UCIs)-GA(UCIS)-CM*-MD**)</strong>

                                </p>
                                <p>
                               
                                   b)  <strong>*</strong> Desde el día 11/04/2020 las cifras de hospitalizados de CM son casos acumulados. 
                                   Previamente se refieren a personas ingresadas ese día.

                                </p>
                                <p>
                                   c)  <strong>**</strong> Desde el dia 26/04/2020 los datos de Hospitalizaciones y UCIs de Madrid son datos 
                                   acumulados. Se Actaulizará la serie restrospectivamente cuando este disponible.

                                </p>
                                <p>
                                  d)  NOTA2:Se excluyen de la serie las notificaciones de personas  con anticuerpos
                                   positivos sin síntomas en el momento de realización de la prueba en los que no se 
                                   puede establecer un momento de contagio ni si han padecido o no la enfermedad.

                                </p>
                            </ol>


                            <a rel="noopener noreferrer" target="_blank" href="https://covid19.isciii.es/">https://covid19.isciii.es/</a>
                            <br></br>
                            <br></br>

                        </div>
                    </div>
                    {/* <div className="row">
                    {this.renderCardsHeaders()}
                    <br></br>
                    <hr className="new1"></hr>
                    <br></br>
                </div> */}
                </div>
            </div>
        )
    }

}


export default Notes;