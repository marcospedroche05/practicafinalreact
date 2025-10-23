import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Apuestas extends Component {
  url = Global.urlApustas;
  loadApuestas = () => {
    var request = "api/Apuestas";
    axios.get(this.url + request).then((response) => {
      this.setState({
        apuestas: response.data,
      });
    });
  };
  state = {
    apuestas: [],
  };
  componentDidMount = () => {
    this.loadApuestas();
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <NavLink className="btn btn-danger text-white" to="/nuevaapuesta">
            Realizar apuesta
          </NavLink>
        </div>
        <div>
          <h2 className="text-center text-danger">
            Local: Real Madrid, Visitante: Atletico de Madrid
          </h2>
        </div>
        <div className="d-flex">
          <table className="table-info text-center w-100 table">
            <thead className="bg-info-subtle">
              <th>USUARIO</th>
              <th>RESULTADO</th>
              <th>FECHA</th>
            </thead>
            <tbody className="">
              {this.state.apuestas.map((apuesta, index) => {
                return (
                  <tr key={index} className="p-2">
                    <td>{apuesta.usuario}</td>
                    <td>{apuesta.resultado}</td>
                    <td>{apuesta.fecha}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
