import React, { Component } from 'react';

class Politicas extends Component {




    render() {
        return (
                 
        <div>

        <div className="jumbotron text-center">
          <h1>Politicas Privacidad</h1>
          <p className="text-justify">Privacidad de Covid19 España
        </p> 
        </div>
          
        <div className="container">
         
        <div className="row">
            <div className="col-sm-12">
              <h3>POLITICAS DE PRIVACIDAD</h3>
                <p className="text-justify"> Esta pagina web ha sido creada con fin practico de tecnologia web (reactJS). De caracter informativo, meramente practico y de contenido no lucrativo.
              </p>    
              
              <p className="text-justify"> la fuente de informacion de esta pagina web es de la pagina oficial: 
              <a href="https://covid19.isciii.es/">https://covid19.isciii.es/</a>
              </p>   
              
              <p className="text-justify"> IMPORTANTE:</p>
              <span>El calculo de los casos activos lo hacemos restando del total de casos, los recuperados y los fallecidos:</span>
              
               <ul>
              <li>Ta = Total Activos</li>
              <li>Tc = Total Contagios</li>
              <li>Tr = Total Recuperados</li>
              <li>Tf = Total Fallecidos</li>
              <li><strong>FORMULA: Ta = Tc - Tr - Tf</strong></li>
            </ul>
               
              </div>
         </div>
          
        </div>
        
        </div>
        

            )
    }

}


export default Politicas;