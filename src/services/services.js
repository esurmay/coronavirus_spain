
import { Component } from 'react';
import axios from "axios";
import { regiones } from './region_master.json';


class genericsFunctions extends Component {



    getUrlBase = () => { return 'https://covid19spain-ad3b.restdb.io/rest/coronavirusspain'; }


    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('/');
    }

    formatDateForQuery(date) {

        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    getAllData = (fecha) => {

        var settings = {
            "async": true,
            "crossDomain": true,
            "data": '{"Fecha": "2020-02-29"}',
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5e84b5d6f96f9f072a0b0c23",
                "cache-control": "no-cache"
            }
        }


        let _fecha = this.formatDateForQuery(fecha);
        let params = `?q={"FECHA":{"$eq":{"$date":"${_fecha}"}}}`;
        let url = this.getUrlBase() + params;
        return axios.get(url, settings)
            .then(response => {

                let lista = regiones;

                let dataResponse = response.data;
                debugger;
                return dataResponse.map((item) => {
                    let numeroCasos =  (item.CASOS !== "") ? item.CASOS : item["PCRplus"];


                    let tabla = {
                        "CCAA": item.CCAA,
                        "region": lista.find((it => it["CCAA"] === item["CCAA"]))["Descripcion"],
                        "Fecha": item.FECHA,
                        "numero_casos": parseInt(numeroCasos), //parseInt(item.CASOS),
                        "Fallecidos": parseInt(item.Fallecidos),
                        "Recuperados": parseInt(item.Recuperados)
                    }
                    return tabla;
                });

                //localStorage.setItem('data', JSON.stringify(dataResult));

            }, error => {
                console.log(error);
            });


    }



    getAll = () => {

        var settings = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5e84b5d6f96f9f072a0b0c23",
                "cache-control": "no-cache"
            }
        }

        let params = `?groupby=FECHA&aggregate=CASOS&aggregate=Fallecidos&aggregate=Recuperados`;
        let url = this.getUrlBase() + params;

        return axios.get(url, settings)
            .then(response => {

                let arrayDatos = Object.entries(response.data);

                return arrayDatos.map((iArr, index) => {

                    return {
                        "Fecha": this.formatDate(new Date(iArr[0])),
                        "Casos": iArr[1]["SUM CASOS"],
                        "Recuperados": iArr[1]["SUM Recuperados"],
                        "Fallecidos": iArr[1]["SUM Fallecidos"],
                    };

                });



            }, error => {
                console.log(error);

            });
    }


    getDataforBars = () => {

        var settings = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5e84b5d6f96f9f072a0b0c23",
                "cache-control": "no-cache"
            }
        }

        let params = `?groupby=FECHA&aggregate=CASOS&aggregate=PCRplus&aggregate=Fallecidos&aggregate=Recuperados`;
        //let params = `?groupby=FECHA&aggregate=PCRplus&aggregate=Fallecidos&aggregate=Recuperados`;

        let url = this.getUrlBase() + params;

        return axios.get(url, settings)
            .then(response => {

                let arrayDatos = Object.entries(response.data);

                return arrayDatos.map((iArr, index) => {

                    return {
                        "Fecha": this.formatDate(new Date(iArr[0])),
                        "CasosPCR": iArr[1]["SUM PCRplus"],
                        "Casos": iArr[1]["SUM CASOS"],
                        "Recuperados": iArr[1]["SUM Recuperados"],
                        "Fallecidos": iArr[1]["SUM Fallecidos"],
                    };

                });



            }, error => {
                console.log(error);

            });
    }

    getDataForHeaders = () => {

        return this.getDataforBars();

        // const datos =  this.getDataforBars();

        // let casos = 0;
        // let activos = 0;
        // let fallecidos = 0;
        // let recuperados = 0;
        // let Fecha = "";

        // if (datos && datos.length > 0) {

        //     let last = datos[datos.length - 1];

        //     Fecha = last.Fecha;
        //     casos = last.Casos;
        //     activos = last.Casos - last.Recuperados - last.Fallecidos;
        //     fallecidos = last.Fallecidos;
        //     recuperados = last.Recuperados;
        // }

        // return [
        //     { Fecha: Fecha, total: this.numberWithCommas(casos), Descripcion: "Total Casos" },
        //     { Fecha: Fecha, total: this.numberWithCommas(activos), Descripcion: "Casos Activos" },
        //     { Fecha: Fecha, total: this.numberWithCommas(fallecidos), Descripcion: "Fallecidos" },
        //     { Fecha: Fecha, total: this.numberWithCommas(recuperados), Descripcion: "Recuperados" }
        // ]


    }

    getDataByDate = async (fecha) => {


        let dataResult = [];


        var settings = {
            "async": true,
            "crossDomain": true,
            "data": '{"fechas": "2020-02-29"}',
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5e84b5d6f96f9f072a0b0c23",
                "cache-control": "no-cache"
            }
        }

        fecha = (fecha) ? this.formatDateForQuery(fecha) : this.formatDateForQuery(new Date());
        let params = `?q={"FECHA":{"$eq":{"$date":"${fecha}"}}}`;
        let url = this.getUrlBase() + params;
    
        await axios.get(url, settings)
            .then(response => {

                let lista = regiones;
                dataResult = response.data.map((item) => {
                    let numeroCasos =  (item.CASOS !== "") ? item.CASOS : item["PCRplus"];
                    return {
                        "CCAA": item.CCAA,
                        "region": lista.find((it => it["CCAA"] === item["CCAA"]))["Descripcion"],
                        "Fechas": item.FECHA,
                        "numero_casos": numeroCasos,
                        "Fallecidos": item.Fallecidos,
                        "Recuperados": item.Recuperados
                    }
                });

                console.log(dataResult);



            }, error => {
                console.log(error);
            });



        return dataResult;
    }



}
export default genericsFunctions;
