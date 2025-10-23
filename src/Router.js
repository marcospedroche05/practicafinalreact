import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuEquipos from "./components/MenuEquipos";
import HomeEquipos from "./components/HomeEquipos";
import DetallesEquipo from "./components/DetallesEquipo";
import JugadoresEquipo from "./components/JugadoresEquipo";
import DetallesJugador from "./components/DetallesJugador";
import Apuestas from "./components/Apuestas";
import RealizarApuesta from "./components/RealizarApuesta";

export default class Router extends Component {
  render() {
    function DetallesEquipoElement() {
      var { idequipo } = useParams();
      return <DetallesEquipo idequipo={idequipo} />;
    }
    function JugadoresEquipoElement() {
      var { idequipo } = useParams();
      return <JugadoresEquipo idequipo={idequipo} />;
    }
    function DetallesJugadorElement() {
      var { idjugador } = useParams();
      return <DetallesJugador idjugador={idjugador} />;
    }
    return (
      <BrowserRouter>
        <MenuEquipos />
        <Routes>
          <Route path="/" element={<HomeEquipos />} />
          <Route
            path="/detallesequipo/:idequipo"
            element={<DetallesEquipoElement />}
          />
          <Route
            path="/jugadores/:idequipo"
            element={<JugadoresEquipoElement />}
          />
          <Route
            path="/detallesjugador/:idjugador"
            element={<DetallesJugadorElement />}
          />
          <Route path="/apuestas" element={<Apuestas />} />
          <Route path="/nuevaapuesta" element={<RealizarApuesta />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
