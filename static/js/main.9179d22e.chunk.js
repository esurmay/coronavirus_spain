(this.webpackJsonpcoronavirus_spain=this.webpackJsonpcoronavirus_spain||[]).push([[0],{24:function(e,a,t){"use strict";var n=t(16),r=t.n(n),l=t(21),s=t(4),o=t(5),c=t(7),i=t(6),u=t(0),d=t(19),m=t.n(d),p=t(34),E=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).getUrlBase=function(){return"https://covid19spain-ad3b.restdb.io/rest/coronavirusspain"},e.getAllData=function(a){var t=e.getSettings(),n=e.formatDateForQuery(a),r='?q={"FECHA":{"$eq":{"$date":"'.concat(n,'"}}}'),l=e.getUrlBase()+r;return m.a.get(l,t).then((function(e){var a=p.a;return e.data.map((function(e){var t=""!==e.CASOS?e.CASOS:e.PCRplus;return{CCAA:e.CCAA,region:a.find((function(a){return a.CCAA===e.CCAA})).Descripcion,Fecha:e.FECHA,numero_casos:parseInt(t),Fallecidos:parseInt(e.Fallecidos),Recuperados:parseInt(e.Recuperados)}}))}),(function(e){console.log(e)}))},e.getAll=function(){var a=e.getSettings(),t=e.getUrlBase()+"?groupby=FECHA&aggregate=CASOS&aggregate=Fallecidos&aggregate=Recuperados";return m.a.get(t,a).then((function(a){return Object.entries(a.data).map((function(a,t){return{Fecha:e.formatDate(new Date(a[0])),Casos:a[1]["SUM CASOS"],Recuperados:a[1]["SUM Recuperados"],Fallecidos:a[1]["SUM Fallecidos"]}}))}),(function(e){console.log(e)}))},e.getDataforBars=function(){var a=e.getSettings(),t=e.getUrlBase()+"?groupby=FECHA&aggregate=CASOS&aggregate=PCRplus&aggregate=Fallecidos&aggregate=Recuperados";return m.a.get(t,a).then((function(a){return Object.entries(a.data).map((function(a,t){return{Fecha:e.formatDate(new Date(a[0])),CasosPCR:a[1]["SUM PCRplus"],Casos:a[1]["SUM CASOS"],Recuperados:a[1]["SUM Recuperados"],Fallecidos:a[1]["SUM Fallecidos"]}}))}),(function(e){console.log(e)}))},e.getDataForHeaders=function(){var a=Object(l.a)(r.a.mark((function a(t){var n,l,s,o,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=[],l=e.getSettings(),s=e.formatDateForQuery(t),o='?q={"FECHA":{"$eq":{"$date":"'.concat(s,'"}}}'),"&groupby=FECHA&aggregate=CASOS&aggregate=PCRplus&aggregate=Fallecidos&aggregate=Recuperados&aggregate=UCI&aggregate=Hospitalizados",c=e.getUrlBase()+o+"&groupby=FECHA&aggregate=CASOS&aggregate=PCRplus&aggregate=Fallecidos&aggregate=Recuperados&aggregate=UCI&aggregate=Hospitalizados",a.next=8,m.a.get(c,l).then((function(a){if(0===Object.keys(a.data).length)return null;var t=Object.entries(a.data);n=t.map((function(a,t){return{Fecha:e.formatDate(new Date(a[0])),CasosPCR:a[1]["SUM PCRplus"],Casos:a[1]["SUM CASOS"],Recuperados:a[1]["SUM Recuperados"],Fallecidos:a[1]["SUM Fallecidos"],UCI:a[1]["SUM UCI"],Hospitalizados:a[1]["SUM Hospitalizados"]}}))}),(function(e){console.log(e)}));case 8:return a.abrupt("return",n);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.getDataByDate=function(){var a=Object(l.a)(r.a.mark((function a(t){var n,l,s,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=[],l=e.getSettings(),t=t?e.formatDateForQuery(t):e.formatDateForQuery(new Date),s='?q={"FECHA":{"$eq":{"$date":"'.concat(t,'"}}}'),o=e.getUrlBase()+s,a.next=7,m.a.get(o,l).then((function(e){var a=p.a;n=e.data.map((function(e){var t=""!==e.CASOS?e.CASOS:e.PCRplus;return{CCAA:e.CCAA,region:a.find((function(a){return a.CCAA===e.CCAA})).Descripcion,Fechas:e.FECHA,numero_casos:t,Fallecidos:e.Fallecidos,Recuperados:e.Recuperados}}))}),(function(e){console.log(e)}));case 7:return a.abrupt("return",n);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.getSettings=function(){return{async:!0,crossDomain:!0,data:'{"fechas": "2020-02-29"}',method:"GET",headers:{"content-type":"application/json","x-apikey":"5e84b5d6f96f9f072a0b0c23","cache-control":"no-cache"}}},e}return Object(o.a)(t,[{key:"formatDate",value:function(e){var a=new Date(e),t=""+(a.getMonth()+1),n=""+a.getDate(),r=a.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[n,t,r].join("/")}},{key:"formatDateForQuery",value:function(e){var a=new Date(e),t=""+(a.getMonth()+1),n=""+a.getDate(),r=a.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[r,t,n].join("-")}}]),t}(u.Component);a.a=E},34:function(e){e.exports=JSON.parse('{"a":[{"Descripcion":"Andaluc\xeda","CCAA":"AN"},{"Descripcion":"Arag\xf3n","CCAA":"AR"},{"Descripcion":"Principado de Asturias","CCAA":"AS"},{"Descripcion":"Islas Baleares","CCAA":"IB"},{"Descripcion":"Canarias","CCAA":"CN"},{"Descripcion":"Cantabria","CCAA":"CB"},{"Descripcion":"Castilla y Le\xf3n","CCAA":"CL"},{"Descripcion":"Castilla La Mancha","CCAA":"CM"},{"Descripcion":"Catalu\xf1a","CCAA":"CT"},{"Descripcion":"Galicia","CCAA":"GA"},{"Descripcion":"C. Valenciana","CCAA":"VC"},{"Descripcion":"Extremadura","CCAA":"EX"},{"Descripcion":"Comunidad de Madrid","CCAA":"MD"},{"Descripcion":"Regi\xf3n de Murcia","CCAA":"MC"},{"Descripcion":"Comunidad Foral de Navarra","CCAA":"NC"},{"Descripcion":"Pa\xeds Vasco","CCAA":"PV"},{"Descripcion":"La Rioja","CCAA":"RI"},{"Descripcion":"Ceuta","CCAA":"CE"},{"Descripcion":"Melilla","CCAA":"ML"}]}')},37:function(e,a,t){},49:function(e,a,t){"use strict";var n=t(4),r=t(5),l=t(7),s=t(6),o=t(0),c=t.n(o),i=(t(37),function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Fases de Desescalada"),c.a.createElement("p",{className:"text-justify"})),c.a.createElement("div",{className:"container text-justify"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-12"},c.a.createElement("h3",null,"FASE 0"),c.a.createElement("h4",null,"Preparaci\xf3n"),c.a.createElement("ol",null,c.a.createElement("p",null,"\u2022 Paseos en familia"),c.a.createElement("p",null,"\u2022 Deporte de forma individual."),c.a.createElement("p",null,"\u2022 Entrenamientos individuales de deportistas profesionales y federados y entrenamiento b\xe1sico de ligas profesionales."),c.a.createElement("p",null,"\u2022 Apertura de peque\xf1os locales con cita previa para la atenci\xf3n individual de clientes. por ejemplo, recogida de comida en restaurantes.")),c.a.createElement("br",null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-12"},c.a.createElement("h3",null,"FASE 1"),c.a.createElement("h4",null,"Inicial"),c.a.createElement("ol",null,c.a.createElement("p",null,"\u2022 Se permiten las actividades sociales, como reuniones en casa, aunque est\xe1 por determinar en qu\xe9 condiciones."),c.a.createElement("p",null,"\u2022 Apertura del peque\xf1o comercio."),c.a.createElement("p",null,"\u2022 Apertura de terrazas (ocupaci\xf3n hasta el 30%)."),c.a.createElement("p",null,"\u2022 Apertura de hoteles y de alojamientos tur\xedsticos excluyendo zonas comunes."),c.a.createElement("p",null,"\u2022 Los lugares de culto tendr\xe1n limitaci\xf3n del 30%."),c.a.createElement("p",null,"\u2022 Sector agroalimentario y pesquero."),c.a.createElement("p",null,"\u2022 Entrenamiento medio en ligas profesionales."),c.a.createElement("p",null,"\u2022 Deporte no profesional: para actividades que no impliquen contacto f\xedsico ni uso de vestuarios."),c.a.createElement("p",null,"\u2022 Mercados al aire libre, con condiciones de distanciamiento entre los puestos."),c.a.createElement("p",null,"\u2022 Espect\xe1culos culturales de menos de 30 personas en lugares cerrados (con un tercio de aforo) y de menos de 200 personas al aire libre."),c.a.createElement("p",null,"\u2022 Visitas a museos limitadas a un tercio del aforo."),c.a.createElement("p",null,"\u2022 Velatorios: para un n\xfamero limitado de asistentes.")),c.a.createElement("br",null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-12"},c.a.createElement("h3",null,"FASE 2"),c.a.createElement("h4",null,"Intermedia"),c.a.createElement("ol",null,c.a.createElement("p",null,"\u2022 Apertura de restaurantes para el servicio de mesas, con limitaci\xf3n de aforo."),c.a.createElement("p",null,"\u2022 Viajes a segundas residencias, solo si est\xe1n en la misma provincia."),c.a.createElement("p",null,"\u2022 Cines y teatros con un tercio del aforo. Se podr\xe1n visitar monumentos y salas de exposiciones."),c.a.createElement("p",null,"\u2022 Actividades culturales con menos de 50 personas sentadas. Si son al aire libre, menos de 400 personas sentadas."),c.a.createElement("p",null,"\u2022 Caza y pesca."),c.a.createElement("p",null,"\u2022 Centros educativos (refuerzo, cuidado de menores de seis a\xf1os y Selectividad)."),c.a.createElement("p",null,"\u2022 Reapertura de centros comerciales, prohibi\xe9ndose la permanencia en las \xe1reas comunes o zonas recreativas."),c.a.createElement("p",null,"\u2022 Bodas para un n\xfamero limitado de asistentes.")),c.a.createElement("br",null))),c.a.createElement("div",{className:"col-xs-12 col-12"},c.a.createElement("h3",null,"FASE 3"),c.a.createElement("h4",null,"Intermedia"),c.a.createElement("ol",null,c.a.createElement("p",null,"\u2022 En restauraci\xf3n disminuir\xe1n las restricciones de aforo, pero con estricta separaci\xf3n entre el p\xfablico."),c.a.createElement("p",null," \u2022 Se flexibilizar\xe1 la movilidad general"),c.a.createElement("p",null,"\u2022 Se ampliar\xe1 la ocupaci\xf3n de espacios, como el comercio, por ejemplo, hasta un 50% de su aforo."),c.a.createElement("p",null,"\u2022 Discotecas y bares nocturnos con un aforo m\xe1ximo de un tercio del habitual"),c.a.createElement("p",null,"\u2022 Apertura de playas en condiciones de seguridad y distanciamiento."),c.a.createElement("p",null,"\u2022 Toros: con una limitaci\xf3n de aforo que garantice una persona por cada 9 metros cuadrados.")),c.a.createElement("br",null)),c.a.createElement("div",{className:"col-xs-12 col-12"},c.a.createElement("h3",null,"Ultima FASE"),c.a.createElement("h4",null,"Situaci\xf3n de nueva normalidad"),c.a.createElement("ol",null,c.a.createElement("h5",null,"\u2022 Finales de junio.")),c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://covid19.isciii.es/"},"https://covid19.isciii.es/"),c.a.createElement("br",null),c.a.createElement("br",null))))}}]),t}(o.Component));a.a=i},50:function(e,a,t){"use strict";var n=t(16),r=t.n(n),l=t(21),s=t(4),o=t(5),c=t(26),i=t(7),u=t(6),d=t(0),m=t.n(d),p=(t(91),t(24)),E=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={data:[],fecha:new Date,isLoading:!1,total:0,disabledClass:"arrow"},n.labelFecha=m.a.createRef(),n.handleClick=n.handleClick.bind(Object(c.a)(n)),n.totalCasos=0,n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this.setState({isLoading:!0}),(new p.a).getAllData(new Date).then((function(a){e.totalCasos=a.length>0?a.reduce((function(e,a){return Number(e)+Number(a.numero_casos)}),0):0,e.setState({data:a,isLoading:!1})}))}},{key:"renderTableData",value:function(){return this.state.data&&this.state.data.length>0?(this.state.data||[]).map((function(e,a){var t="row"+a;return m.a.createElement("tr",{className:t,key:a.toString()},m.a.createElement("td",{className:"tdRowSpan"},e.region),m.a.createElement("td",null,e.numero_casos.toLocaleString()))})):this.state.isLoading?m.a.createElement("tr",null,m.a.createElement("td",{colSpan:"2"},m.a.createElement("div",{className:"comment br animate w80"}),m.a.createElement("div",{className:"comment br animate w80"}),m.a.createElement("hr",null),m.a.createElement("div",{className:"comment br animate w80"}),m.a.createElement("div",{className:"comment br animate w80"}),m.a.createElement("hr",null),m.a.createElement("div",{className:"comment br animate w80"}),m.a.createElement("div",{className:"comment br animate w80"}))):m.a.createElement("tr",null,m.a.createElement("td",{colSpan:"2",className:"tdRowSpanNoData"},"No hay datos..."))}},{key:"handleClick",value:function(){var e=Object(l.a)(r.a.mark((function e(a,t){var n,l,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),a.stopPropagation(),(n=this.state.fecha).setDate(n.getDate()+t),this.setState({data:[],isLoading:!0,disabledClass:"arrow arrowDisabled"}),l=new p.a,e.next=8,l.getDataByDate(n);case 8:s=e.sent,this.totalCasos=s.length>0?s.reduce((function(e,a){return Number(e)+Number(a.numero_casos)}),0):0,this.setState({data:s,isLoading:!1,total:this.totalCasos,disabledClass:"arrow"});case 11:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("div",{className:"container",id:"header"},m.a.createElement("div",{className:"header-left"},m.a.createElement("span",{className:this.state.disabledClass,onClick:function(a){return e.handleClick(a,-1)}},m.a.createElement("i",{className:"fas fa-arrow-circle-left"}))),m.a.createElement("div",{className:"header-right"},m.a.createElement("p",{id:"lblFecha",ref:this.labelFecha,align:"center",className:"fechaTabla"},this.state.fecha.toLocaleDateString())),m.a.createElement("div",{className:"logo",align:"right"},m.a.createElement("span",{className:this.state.disabledClass,onClick:function(a){return e.handleClick(a,1)}},m.a.createElement("i",{className:"fas fa-arrow-circle-right"}))))),m.a.createElement("table",{align:"center"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("h4",null,"CCAA")),m.a.createElement("td",null,m.a.createElement("h4",null,"Casos")))),m.a.createElement("tbody",null,this.renderTableData(),m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("h5",null,"Total")),m.a.createElement("td",null,m.a.createElement("h5",null,this.totalCasos))))),m.a.createElement("hr",{className:"new1"}))}}]),t}(d.Component);a.a=E},60:function(e,a,t){e.exports=t(95)},65:function(e,a,t){},66:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},67:function(e,a,t){},91:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),s=t.n(l),o=(t(65),t(4)),c=t(5),i=t(7),u=t(6),d=t(20),m=t(17),p=t(58),E=t(100),f=(t(66),t(67),n.Component,function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Politicas Privacidad"),r.a.createElement("p",{className:"text-justify"},"Privacidad de Covid19 Espa\xf1a")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"POLITICAS DE PRIVACIDAD"),r.a.createElement("p",{className:"text-justify"}," Esta pagina web ha sido creada con fin practico de tecnologia web (reactJS). De caracter informativo, meramente practico y de contenido no lucrativo."),r.a.createElement("p",{className:"text-justify"}," la fuente de informacion de esta pagina web es de la pagina oficial:",r.a.createElement("a",{href:"https://covid19.isciii.es/"},"https://covid19.isciii.es/")),r.a.createElement("p",{className:"text-justify"}," IMPORTANTE:"),r.a.createElement("span",null,"El calculo de los casos activos lo hacemos restando del total de casos, los recuperados y los fallecidos:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Ta = Total Activos"),r.a.createElement("li",null,"Tc = Total Contagios"),r.a.createElement("li",null,"Tr = Total Recuperados"),r.a.createElement("li",null,"Tf = Total Fallecidos"),r.a.createElement("li",null,r.a.createElement("strong",null,"FORMULA: Ta = Tc - Tr - Tf")))))))}}]),t}(n.Component)),g=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Procesamiento de Informacion"),r.a.createElement("p",null,"Asi es como procesamos la informacion que mostramos en esta pagina web.")),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"Fuente Oficial"),r.a.createElement("p",{className:"text-justify"},"cada dia acudimos a la fuente oficial de covid: https://covid19.isciii.es/ y descargamos los datos en formato .cvs"),r.a.createElement("br",null),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da0e332cd26000525ea",alt:"Captura 1",width:"50%",height:"50%"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da0e332cd26000525eb",alt:"Captura 1",width:"50%",height:"50%"}),r.a.createElement("br",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("br",null),r.a.createElement("h3",null,"Formato .XLSX"),r.a.createElement("p",{className:"text-justify"},"obtenemos el .cvs, formateamos las columnas y guardamos en .xlsx"),r.a.createElement("br",null),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da1e332cd26000525ec",alt:"Captura 1",width:"50%",height:"50%"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da1e332cd26000525ed",alt:"Captura 1",width:"50%",height:"50%"}),r.a.createElement("br",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("br",null),r.a.createElement("h3",null,"Base de Datos en la nube"),r.a.createElement("p",{className:"text-justify"},"nos hemos encontrado con un servicio que nos crear una base de datos en la nube y nos permite subir toda la informacion cargada en el excel. Utilizamos en plan free de",r.a.createElement("a",{href:"https://restdb.io/"},"https://restdb.io/")),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da2e332cd26000525ee",alt:"Captura 1",width:"70%",height:"50%"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da2e332cd26000525ef",alt:"Captura 1",width:"60%",height:"50%"}),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da7e332cd26000525f6",alt:"Captura 1",width:"70%",height:"50%"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("br",null),r.a.createElement("h3",null,"Resultado: JSON"),r.a.createElement("p",{className:"text-justify"},"Finalmente el servicio de",r.a.createElement("a",{href:"https://restdb.io/"},"https://restdb.io/"),"nos permite acceder a la informacion y obtenerla en formato .JSON",r.a.createElement("a",{href:"https://covid19spain-ad3b.restdb.io/rest/coronavirus-spain"},"https://covid19spain-ad3b.restdb.io/rest/coronavirus-spain")),r.a.createElement("br",null),r.a.createElement("img",{className:"img-fluid",src:"https://covid19spain-ad3b.restdb.io/media/5e958da8e332cd26000525f8",alt:"Captura 1",width:"40%",height:"50%"}),r.a.createElement("br",null),r.a.createElement("p",{className:"text-justify"},r.a.createElement("strong",null,"NOTA IMPORTANTE DE FUENTE OFICIAL:")," El objetivo de los datos que se publican en esta web es saber el n\xfamero de casos acumulados a la fecha y que por tanto no se puede deducir que la diferencia entre un d\xeda y el anterior es el n\xfamero de casos nuevos ya que esos casos pueden haber sido recuperados de fechas anteriores. Cualquier inferencia que se haga sobre las diferencias de un d\xeda para otro deben hacerse con precauci\xf3n y son \xfanicamente la responsabilidad el autor. * Desde el d\xeda 11/04/2020 las cifras de hospitalizados de CM son casos acumulados. Previamente se refieren a personas ingresadas ese d\xeda.")))))}}]),t}(n.Component),h=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Politicas de Cookies y privacidad"),r.a.createElement("p",{className:"text-justify"},"En cumplimiento con lo dispuesto en el art\xedculo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci\xf3n y de Comercio Electr\xf3nico, esta p\xe1gina web le informa, en esta secci\xf3n, sobre la pol\xedtica de recogida y tratamiento de cookies.")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"\xbfQU\xc9 SON LAS COOKIES?"),r.a.createElement("p",{className:"text-justify"},"Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas p\xe1ginas web. Las cookies permiten a una p\xe1gina web, entre otras cosas, almacenar y recuperar informaci\xf3n sobre los h\xe1bitos de navegaci\xf3n de un usuario o de su equipo y, dependiendo de la informaci\xf3n que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null," \xbfQU\xc9 TIPOS DE COOKIES UTILIZA ESTA P\xc1GINA WEB?"),r.a.createElement("p",{className:"text-justify"},"Esta p\xe1gina web utiliza los siguientes tipos de cookies:"),r.a.createElement("p",{className:"text-justify"},"Cookies de an\xe1lisis: Son aqu\xe9llas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el n\xfamero de usuarios y as\xed realizar la medici\xf3n y an\xe1lisis estad\xedstico de la utilizaci\xf3n que hacen los usuarios del servicio ofertado. Para ello se analiza su navegaci\xf3n en nuestra p\xe1gina web con el fin de mejorar la oferta de productos o servicios que le ofrecemos."),r.a.createElement("p",{className:"text-justify"},"Cookies t\xe9cnicas: Son aquellas que permiten al usuario la navegaci\xf3n a trav\xe9s del \xe1rea restringida y la utilizaci\xf3n de sus diferentes funciones, como por ejemplo, llevar a cambio el proceso de compra de un art\xedculo."),r.a.createElement("p",{className:"text-justify"},"Cookies de personalizaci\xf3n: Son aquellas que permiten al usuario acceder al servicio con algunas caracter\xedsticas de car\xe1cter general predefinidas en funci\xf3n de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a trav\xe9s del cual se conecta al servicio."),r.a.createElement("p",{className:"text-justify"},"Cookies publicitarias: Son aqu\xe9llas que, bien tratadas por esta web o por terceros, permiten gestionar de la forma m\xe1s eficaz posible la oferta de los espacios publicitarios que hay en la p\xe1gina web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra p\xe1gina web. Para ello podemos analizar sus h\xe1bitos de navegaci\xf3n en Internet y podemos mostrarle publicidad relacionada con su perfil de navegaci\xf3n."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"DESACTIVAR LAS COOKIES."),r.a.createElement("p",{className:"text-justify"},"Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuraci\xf3n de las opciones del navegador instalado en su ordenador. En la mayor\xeda de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo. A continuaci\xf3n puede acceder a la configuraci\xf3n de los navegadores webs m\xe1s frecuentes para aceptar, instalar o desactivar las cookies:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Configurar cookies en Google Chrome"),r.a.createElement("li",null,"Configurar cookies en Microsoft Internet Explorer"),r.a.createElement("li",null,"Configurar cookies en Mozilla Firefox"),r.a.createElement("li",null,"Configurar cookies en Safari (Apple)")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"COOKIES DE TERCEROS."),r.a.createElement("p",{className:"text-justify"},"Esta p\xe1gina web utiliza servicios de terceros para recopilar informaci\xf3n con fines estad\xedsticos y de uso de la web. Se usan cookies de DoubleClick para mejorar la publicidad que se incluye en el sitio web. Son utilizadas para orientar la publicidad seg\xfan el contenido que es relevante para un usuario, mejorando as\xed la calidad de experiencia en el uso del mismo."),r.a.createElement("p",{className:"text-justify"},"En concreto, usamos los servicios de Google Adsense y de Google Analytics para nuestras estad\xedsticas y publicidad. Algunas cookies son esenciales para el funcionamiento del sitio, por ejemplo el buscador incorporado."),r.a.createElement("p",{className:"text-justify"},"Nuestro sitio incluye otras funcionalidades proporcionadas por terceros. Usted puede f\xe1cilmente compartir el contenido en redes sociales como Facebook, Twitter o Google +, con los botones que hemos incluido a tal efecto."),r.a.createElement("h3",null,"ADVERTENCIA SOBRE ELIMINAR COOKIES."),r.a.createElement("p",{className:"text-justify"},"Usted puede eliminar y bloquear todas las cookies de este sitio, pero parte del sitio no funcionar\xe1 o la calidad de la p\xe1gina web puede verse afectada."),r.a.createElement("p",{className:"text-justify"},"Si tiene cualquier duda acerca de nuestra pol\xedtica de cookies, puede contactar con esta p\xe1gina web a trav\xe9s de nuestros canales de Contacto."),r.a.createElement("p",{className:"text-justify"}," ",r.a.createElement("strong",null,"NOTA"),": esta lista se actualizar\xe1 con la mayor celeridad posible a medida que vayan cambiando los servicios ofrecidos en los sitios webs y las cookies utilizadas a tales efectos. Sin embargo, ocasionalmente, durante esta actualizaci\xf3n puede ser que la lista no incluya ya una cookie, aunque siempre se referir\xe1 a cookies con prop\xf3sitos id\xe9nticos a los registrados en esta lista.")))))}}]),t}(n.Component),b=(t(37),t(24),t(59),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Notas importantes"),r.a.createElement("p",{className:"text-justify"})),r.a.createElement("div",{className:"container text-justify"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-12"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Nota importante de pagina oficial:  ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://covid19.isciii.es/"},"https://covid19.isciii.es/")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"El objetivo de los datos que se publican en esta web es saber el n\xfamero de casos acumulados a la fecha y que por tanto no se puede deducir que la diferencia entre un d\xeda y el anterior es el n\xfamero de casos nuevos ya que esos casos pueden haber sido recuperados de fechas anteriores. Cualquier inferencia que se haga sobre las diferencias de un d\xeda para otro deben hacerse con precauci\xf3n y son \xfanicamente la responsabilidad del autor."),r.a.createElement("ol",null,r.a.createElement("p",null,"a)  Los datos de estas comunidades son datos de prevalencia (personas ingresadas a fecha de hoy). No reflejan el total de personas que han sido hospitalizadas o ingresadas en UCI\xa0 a lo largo del periodo de notificaci\xf3n  ",r.a.createElement("strong",null,"(CL(UCIs)-GA(UCIS)-CM*-MD**)")),r.a.createElement("p",null,"b)  ",r.a.createElement("strong",null,"*")," Desde el d\xeda 11/04/2020 las cifras de hospitalizados de CM son casos acumulados. Previamente se refieren a personas ingresadas ese d\xeda."),r.a.createElement("p",null,"c)  ",r.a.createElement("strong",null,"**")," Desde el dia 26/04/2020 los datos de Hospitalizaciones y UCIs de Madrid son datos acumulados. Se Actaulizar\xe1 la serie restrospectivamente cuando este disponible."),r.a.createElement("p",null,"d)  NOTA2:Se excluyen de la serie las notificaciones de personas  con anticuerpos positivos sin s\xedntomas en el momento de realizaci\xf3n de la prueba en los que no se puede establecer un momento de contagio ni si han padecido o no la enfermedad.")),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://covid19.isciii.es/"},"https://covid19.isciii.es/"),r.a.createElement("br",null),r.a.createElement("br",null)))))}}]),t}(n.Component)),v=t(49),C=t(50),y=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron text-center d-block d-md-none d-lg-none card-bodyTotales"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Casos diarios"),r.a.createElement("p",{className:"text-justify"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{align:"center",className:"tituloTabla"},"Situacion"),r.a.createElement(C.a,null)))))}}]),t}(n.Component),A=Object(n.lazy)((function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,234))})),N=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(p.a,{className:"color-nav",fixed:"top",expand:"lg",variant:"dark"},r.a.createElement(p.a.Brand,{as:d.b,to:"/coronavirus_spain"},"Covid19 Espa\xf1a"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"}))),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/coronavirus_spain",component:A}),r.a.createElement(m.a,{path:"/Cookies",component:h}),r.a.createElement(m.a,{path:"/Politicas",component:f}),r.a.createElement(m.a,{path:"/ProcesamientoInfo",component:g}),r.a.createElement(m.a,{path:"/Notes",component:b}),r.a.createElement(m.a,{path:"/FasesDesescalada",component:v.a}),r.a.createElement(m.a,{path:"/Casos",component:y})))))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/coronavirus_spain",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/coronavirus_spain","/service-worker.js");S?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(a,e)}))}}()}},[[60,1,3]]]);
//# sourceMappingURL=main.9179d22e.chunk.js.map