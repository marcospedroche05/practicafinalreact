import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class RealizarApuesta extends Component {
  cajausuario = React.createRef();
  cajaresultado1 = React.createRef();
  cajaresultado2 = React.createRef();
  cajafecha = React.createRef();
  url = Global.urlApustas;
  crearApuesta = (event) => {
    event.preventDefault();
    var request = "api/Apuestas";
    var resultado = this.cajaresultado1.current.value + "-" + this.cajaresultado2.current.value;
    var apuesta = {
      idApuesta: 0,
      usuario: this.cajausuario.current.value,
      resultado: resultado,
      fecha: this.cajafecha.current.value
    }
    axios.post(this.url + request, apuesta).then(response => {
      this.setState({
        status: true
      })
    })
  };
  state = {
    status: false
  }
  render() {
    return (
      <div className="d-flex flex-column">
        {this.state.status && <Navigate to="/apuestas"/>}
        <div>
          <h1 className="text-center">Nueva apuesta</h1>
          <br />
          <form onSubmit={this.crearApuesta}>
            <label>Usuario:</label>
            <input
              type="text"
              className="form-control w-50"
              ref={this.cajausuario}
            />
            <br />
            <label>Real Madrid:</label>
            <input
              type="text"
              className="form-control w-50"
              ref={this.cajaresultado1}
            />
            <br />
            <label>Atlético de Madrid:</label>
            <input
              type="text"
              className="form-control w-50"
              ref={this.cajaresultado2}
            />
            <br />
            <label>Fecha:</label>
            <input
              type="text"
              className="form-control w-50"
              ref={this.cajafecha}
            />
            <br />
            <div className="d-flex align-content- justify-content-center">
              <button className="btn btn-info text-white">Nueva apuesta</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
