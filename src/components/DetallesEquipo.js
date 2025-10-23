import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesEquipo extends Component {
  url = Global.urlApustas;
  loadEquipo = () => {
    var request = "api/Equipos/" + this.props.idequipo;
    axios.get(this.url + request).then((response) => {
      this.setState({
        equipo: response.data,
      });
    });
  };
  state = {
    equipo: {},
  };
  componentDidMount = () => {
    this.loadEquipo();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idequipo != this.props.idequipo) this.loadEquipo();
  };
  render() {
    return (
      <div className="d-flex justify-content-center m-5">
        <div className="w-75 border-secondary border">
          <div className="bg-secondary-subtle text-center p-2 border-bottom border-secondary">
            {this.state.equipo && this.state.equipo.nombre}
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center p-4">
            {this.state.equipo && (
              <>
                <img src={this.state.equipo.imagen} width={"150px"} />
                <h4>Champions: {this.state.equipo.champions}</h4>
                <br />
                <p className="text-center">{this.state.equipo.descripcion}</p>
                <br />
                <div>
                  <NavLink
                    className="btn btn-success text-white"
                    to={"/jugadores/" + this.state.equipo.idEquipo}
                  >
                    Jugadores
                  </NavLink>
                  <NavLink className="btn btn-primary text-white" to="/">
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
