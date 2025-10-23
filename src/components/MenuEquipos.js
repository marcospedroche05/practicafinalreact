import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class MenuEquipos extends Component {
  url = Global.urlApustas;
  loadEquipos = () => {
    var request = "api/Equipos";
    axios.get(this.url + request).then((response) => {
      this.setState({
        equipos: response.data,
      });
    });
  };
  state = {
    equipos: [],
  };
  componentDidMount = () => {
    this.loadEquipos();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-info-subtle">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Champions
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/apuestas">
                    Apuestas
                  </NavLink>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Equipos
                  </a>
                  <ul class="dropdown-menu">
                    {this.state.equipos.map((equipo, index) => {
                      return (
                        <li className="dropdown-item" key={index}>
                          <NavLink to={"/detallesequipo/" + equipo.idEquipo}>
                            {equipo.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
