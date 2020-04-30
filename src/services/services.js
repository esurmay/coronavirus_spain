
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

        var settings = this.getSettings();
        let _fecha = this.formatDateForQuery(fecha);
        let params = `?q={"FECHA":{"$eq":{"$date":"${_fecha}"}}}`;
        let url = this.getUrlBase() + params;
        return axios.get(url, settings)
            .then(response => {

                let lista = regiones;

                let dataResponse = response.data;

                return dataResponse.map((item) => {
                    let numeroCasos = (item.CASOS !== "") ? item.CASOS : item["PCRplus"];


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

        var settings = this.getSettings();
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

        var settings = this.getSettings();
        let params = `?groupby=FECHA&aggregate=CASOS&aggregate=PCRplus&aggregate=Fallecidos&aggregate=Recuperados`;
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

    getDataForHeaders = async (fechaActual) => {

        let dataResult = [];

        var settings = this.getSettings();

        let fecha = this.formatDateForQuery(fechaActual);
        let paramDate = `?q={"FECHA":{"$eq":{"$date":"${fecha}"}}}`;
        let paramGroups = `&groupby=FECHA&aggregate=CASOS&aggregate=PCRplus&aggregate=Fallecidos&aggregate=Recuperados`;

        let url = this.getUrlBase() + paramDate + paramGroups;

        await axios.get(url, settings)
            .then(response => {

                if (Object.keys(response.data).length === 0) {
                    return null;
                }

                let arrayDatos = Object.entries(response.data);

                dataResult = arrayDatos.map((iArr, index) => {

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

        return dataResult;
    }

    getDataByDate = async (fecha) => {

        let dataResult = [];

        var settings = this.getSettings();

        fecha = (fecha) ? this.formatDateForQuery(fecha) : this.formatDateForQuery(new Date());
        let params = `?q={"FECHA":{"$eq":{"$date":"${fecha}"}}}`;
        let url = this.getUrlBase() + params;

        await axios.get(url, settings)
            .then(response => {

                let lista = regiones;
                dataResult = response.data.map((item) => {
                    let numeroCasos = (item.CASOS !== "") ? item.CASOS : item["PCRplus"];
                    return {
                        "CCAA": item.CCAA,
                        "region": lista.find((it => it["CCAA"] === item["CCAA"]))["Descripcion"],
                        "Fechas": item.FECHA,
                        "numero_casos": numeroCasos,
                        "Fallecidos": item.Fallecidos,
                        "Recuperados": item.Recuperados
                    }
                });


            }, error => {
                console.log(error);
            });



        return dataResult;
    }

    getSettings = () => {

        return {
            "async": true,
            "crossDomain": true,
            "data": '{"fechas": "2020-02-29"}',
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5e84b5d6f96f9f072a0b0c23",
                "cache-control": "no-cache"
            }
        };

    }


}
export default genericsFunctions;
