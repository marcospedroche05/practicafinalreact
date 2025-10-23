import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesJugador extends Component {
  url = Global.urlApustas;
  loadJugador = () => {
    var request = "api/Jugadores/" + this.props.idjugador;
    axios.get(this.url + request).then((response) => {
      this.setState({
        jugador: response.data,
      });
    });
  };
  state = {
    jugador: {},
  };
  componentDidMount = () => {
    this.loadJugador();
  };
  render() {
    return (
      <div className="d-flex justify-content-center m-5">
        <div className="w-75 border-secondary border">
          <div className="bg-secondary-subtle text-center p-2 border-bottom border-secondary">
            {this.state.jugador && this.state.jugador.nombre}
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center p-4">
            {this.state.jugador && (
              <>
                <img src={this.state.jugador.imagen} width={"150px"} />
                <h4>{this.state.jugador.posicion}</h4>
                <br />
                <p className="text-center">
                  Fecha Nacimiento: {this.state.jugador.fechaNacimiento}
                </p>
                <p className="text-center">Pais: {this.state.jugador.pais}</p>
                <br />
                <div>
                  <NavLink
                    className="btn btn-success text-white"
                    to={"/jugadores/" + this.state.jugador.idEquipo}
                  >
                    Volver
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
