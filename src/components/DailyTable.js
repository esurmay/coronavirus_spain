    import React, { Component } from 'react';
    import '../styles/tabla.css'
    import genericsFunctions from '../services/services';


    class DailyTable extends Component {

        constructor(props) {
            super(props);

            this.state = { data: [], fecha: new Date(), isLoading: false, total: 0, disabledClass: "arrow" };
            this.labelFecha = React.createRef();
            this.handleClick = this.handleClick.bind(this);
            this.totalCasos = 0;

        }


        componentDidMount() {
            this.getData();

        }

        getData() {

            this.setState({ isLoading: true })

            let funciones = new genericsFunctions();
            
            let retrieve = funciones.getAllData( new Date());

            retrieve.then(dataResult => {
            
                console.log(dataResult);
                this.totalCasos = (dataResult.length > 0) ? 
                dataResult.reduce((acc, current) => { return Number(acc) + Number(current.numero_casos); },0):
                0;
                this.setState({ data: dataResult, isLoading: false })
            })

        }

        


        renderTableData() {

            if (this.state.data && this.state.data.length > 0) {
                return (this.state.data || []).map((x, index) => {
                    let indexRow = "row" + index;
                    //this.totalCasos += parseInt(x.numero_casos);

                    return (
                        <tr className={indexRow} key={index.toString()} >
                            <td className="tdRowSpan">{x.region}</td>
                            <td>{x.numero_casos.toLocaleString()}</td>
                        </tr>
                    )
                })
            }
            else {

                if (this.state.isLoading) {
                    return (

                        <tr>
                            <td colSpan="2">
                                <div className="comment br animate w80"></div>
                                <div className="comment br animate w80"></div>
                                <hr />
                                <div className="comment br animate w80"></div>
                                <div className="comment br animate w80"></div>
                                <hr />
                                <div className="comment br animate w80"></div>
                                <div className="comment br animate w80"></div>
                            </td>
                        </tr>

                    )
                }
                else {
                    return (
                        <tr>
                            <td colSpan="2" className="tdRowSpanNoData">
                                No hay datos...
                </td>
                        </tr>
                    )
                }
            }
        }

        async handleClick(e, countDay) {

            
            e.preventDefault();
            e.stopPropagation();
            var fechaActual = this.state.fecha;
            fechaActual.setDate(fechaActual.getDate() + countDay);

            this.setState({ data: [],isLoading: true, disabledClass: "arrow arrowDisabled" });

            let test = new genericsFunctions();
            let data = await test.getDataByDate(fechaActual);    

            this.totalCasos = (data.length > 0) ? 
            data.reduce((acc, current) => { return Number(acc) + Number(current.numero_casos); },0):
            0;

            this.setState({ data: data, isLoading: false, total: this.totalCasos, disabledClass: "arrow"  });




        }

        render() {

            return (
                <div>

                    <div>
                        <div className="container" id="header">
                            <div className="header-left">
                                <span className={this.state.disabledClass} onClick={(e) => this.handleClick(e, -1)} >
                                    <i className="fas fa-arrow-circle-left"></i>
                                </span>
                            </div>
                            <div className="header-right">
                                <p id="lblFecha" ref={this.labelFecha} align="center" className="fechaTabla">
                                    {this.state.fecha.toLocaleDateString()}


                                </p>
                            </div>
                            <div className="logo" align="right">
                                <span className={this.state.disabledClass} onClick={(e) => this.handleClick(e, 1)}>
                                    <i className="fas fa-arrow-circle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <table align="center">
                        <thead>
                            <tr>
                                <td><h4>CCAA</h4></td>
                                <td><h4>Casos</h4></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderTableData()
                            }
                            <tr>
                                <td><h5>Total</h5></td>
                                <td><h5>{this.totalCasos}</h5></td>
                            </tr>

                        </tbody>
                    </table>
                    <hr className="new1"></hr>


                </div>
            );
        }

    }

    export default DailyTable;