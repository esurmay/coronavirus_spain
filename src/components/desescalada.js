import React, { Component } from 'react';
import '../styles/ContainerDataHeader.css'

class Desescalada extends Component {


    render() {
        return (
            <div>

                <div className="jumbotron text-center">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Fases de Desescalada</h1>
                    <p className="text-justify"></p>
                </div>
                <div className="container text-justify">
                    <div className="row">
                        <div className="col-xs-12 col-12">
                            <h3>FASE 0</h3>
                            <h4>Preparación</h4>
                            <ol>
                                <p>• Paseos en familia</p>
                                <p>• Deporte de forma individual.</p>
                                <p>• Entrenamientos individuales de deportistas profesionales y federados
                                     y entrenamiento básico de ligas profesionales.</p>
                                <p>• Apertura de pequeños locales con cita previa para la atención individual de clientes.
                                    por ejemplo, recogida de comida en restaurantes.</p>
                            </ol>
                            <br></br>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-12">
                            <h3>FASE 1</h3>
                            <h4>Inicial</h4>
                            <ol>
                                <p>• Se permiten las actividades sociales, como reuniones en casa, aunque está por determinar en qué condiciones.</p>
                                <p>• Apertura del pequeño comercio.</p>
                                <p>• Apertura de terrazas (ocupación hasta el 30%).</p>
                                <p>• Apertura de hoteles y de alojamientos turísticos excluyendo zonas comunes.</p>

                                <p>• Los lugares de culto tendrán limitación del 30%.</p>
                                <p>• Sector agroalimentario y pesquero.</p>
                                <p>• Entrenamiento medio en ligas profesionales.</p>

                                <p>• Deporte no profesional: para actividades que no impliquen contacto físico ni uso de vestuarios.</p>
                                <p>• Mercados al aire libre, con condiciones de distanciamiento entre los puestos.</p>
                                <p>• Espectáculos culturales de menos de 30 personas en lugares cerrados (con un tercio de aforo) y de menos de 200 personas al aire libre.</p>

                                <p>• Visitas a museos limitadas a un tercio del aforo.</p>
                                <p>• Velatorios: para un número limitado de asistentes.</p>
                            </ol>
                            <br></br>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xs-12 col-12">
                            <h3>FASE 2</h3>
                            <h4>Intermedia</h4>
                            <ol>
                                <p>• Apertura de restaurantes para el servicio de mesas, con limitación de aforo.</p>
                                <p>• Viajes a segundas residencias, solo si están en la misma provincia.</p>
                                <p>• Cines y teatros con un tercio del aforo. Se podrán visitar monumentos y salas de exposiciones.</p>
                                <p>• Actividades culturales con menos de 50 personas sentadas. Si son al aire libre, menos de 400 personas sentadas.</p>

                                <p>• Caza y pesca.</p>
                                <p>• Centros educativos (refuerzo, cuidado de menores de seis años y Selectividad).</p>
                                <p>• Reapertura de centros comerciales, prohibiéndose la permanencia en las áreas comunes o zonas recreativas.</p>

                                <p>• Bodas para un número limitado de asistentes.</p>

                            </ol>
                            <br></br>
                        </div>
                    </div>
                    <div className="col-xs-12 col-12">
                        <h3>FASE 3</h3>
                        <h4>Intermedia</h4>
                        <ol>
                            <p>• En restauración disminuirán las restricciones de aforo, pero con estricta separación entre el público.</p>
                            <p> • Se flexibilizará la movilidad general</p>
                            <p>• Se ampliará la ocupación de espacios, como el comercio, por ejemplo, hasta un 50% de su aforo.</p>
                            <p>• Discotecas y bares nocturnos con un aforo máximo de un tercio del habitual</p>
                            <p>• Apertura de playas en condiciones de seguridad y distanciamiento.</p>
                            <p>• Toros: con una limitación de aforo que garantice una persona por cada 9 metros cuadrados.</p>
                        </ol>
                        <br></br>

                    </div>

                    <div className="col-xs-12 col-12">
                        <h3>Ultima FASE</h3>
                        <h4>Situación de nueva normalidad</h4>
                        <ol>
                            <h5>• Finales de junio.</h5>
                        </ol>
                        <a rel="noopener noreferrer" target="_blank" href="https://covid19.isciii.es/">https://covid19.isciii.es/</a>
                        <br></br>
                        <br></br>
                    </div>

                </div>

            </div>

        )
    }


}


export default Desescalada;