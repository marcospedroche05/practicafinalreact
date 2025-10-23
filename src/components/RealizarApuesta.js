import React, { Component } from "react";
import Global from "../Global";

export default class RealizarApuesta extends Component {
  cajausuario = React.createRef();
  cajaresultado1 = React.createRef();
  cajaresultado2 = React.createRef();
  cajafecha = React.createRef();
  url = Global.urlApustas;
  crearApuesta = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="d-flex flex-column">
        <div>
          <h1 className="text-center">Nueva apuesta</h1>
          <br />
          <form>
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
