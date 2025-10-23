import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class JugadoresEquipo extends Component {
  url = Global.urlApustas;
  loadJugadores = () => {
    var request = "api/Jugadores/JugadoresEquipos/" + this.props.idequipo;
    axios.get(this.url + request).then((response) => {
      this.setState({
        jugadores: response.data,
      });
    });
  };
  state = {
    jugadores: [],
  };
  componentDidMount = () => {
    this.loadJugadores();
  };
  render() {
    return (
      <div className="d-flex justify-content-center m-5">
        <div className="w-75">
          <div className="d-flex justify-content-center">
            <NavLink
              to={"/detallesequipo/" + this.props.idequipo}
              className="btn btn-success text-white"
            >
              Volver
            </NavLink>
          </div>
          <div className="bg-info-subtle">
            <table className="w-100 text-center">
              <thead>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Detalles</th>
              </thead>
              <tbody>
                {this.state.jugadores.map((jugador, index) => {
                  return (
                    <tr key={index}>
                      <td>{jugador.nombre}</td>
                      <td>
                        <img src={jugador.imagen} width={"150px"} />
                      </td>
                      <td>
                        <NavLink
                          className="btn  btn-outline-danger"
                          to={"/detallesjugador/" + jugador.idJugador}
                        >
                          Detalles
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
