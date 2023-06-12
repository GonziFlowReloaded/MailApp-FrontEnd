//@ts-nocheck

import React, { useEffect, useState } from "react";
import axios from "axios";
import Bandeja from "../components/Bandeja";
import Mensaje from "../components/Mensaje";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";

const Inicio = () => {
  const [bandeja, setBandeja] = useState([]);
  const [mensajeActual, setMensajeActual] = useState({});
  const [filtro, setFiltro] = useState("");
  const [correosFiltrados, setCorreosFiltrados] = useState([]);

  useEffect(() => {
    const getBandeja = async () => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_URL}/buzon`,
          {
            nombre: localStorage.getItem("nombre"),
          }
        );

        setBandeja(data.emails);
        setMensajeActual(data.emails[0]);
      } catch (error) {
        // Manejo del error
      }
    };

    getBandeja();
  }, []);

  const handleClickMensaje = (id) => {
    const mensaje = bandeja.find((item) => item.id === id);
    setMensajeActual(mensaje);
  };

  const handleBuscarCorreos = (valor) => {
    setFiltro(valor);

    if (valor) {
      const correosFiltrados = bandeja.filter(
        (correo) =>
          correo.subject?.toLowerCase().includes(valor.toLowerCase()) ||
          correo.body?.toLowerCase().includes(valor.toLowerCase())
      );
      setCorreosFiltrados(correosFiltrados);
    } else {
      setCorreosFiltrados([]);
    }
  };

  const navigate = useNavigate();

  if (
    !localStorage.getItem("nombre") ||
    localStorage.getItem("nombre") === "" ||
    localStorage.getItem("nombre") === "undefined"
  ) {
    navigate("/auth/login");
    return <div>Redireccionando al inicio de sesión...</div>;
  }

  if (!bandeja || bandeja.length === 0)
    return (
      <div className="text-xl font-semibold text-gray-800">No hay mensajes</div>
    );

  const correosMostrados = filtro ? correosFiltrados : bandeja;

  return (
    <>
      <Input.Search
        placeholder="Buscar correo"
        value={filtro}
        onChange={(e) => handleBuscarCorreos(e.target.value)}
      />

      <div className="md:flex h-screen">
        <div className="bg-gray-100 md:w-1/4 h-screen overflow-y-scroll dark:bg-gray-700 transition duration-500 ease-in-out">
          {correosMostrados.map((item) => (
            <Bandeja
              key={item.id}
              bandeja={bandeja}
              item={item}
              mensajeActual={mensajeActual}
              handleClickMensaje={handleClickMensaje}
            />
          ))}
        </div>

        <Mensaje mensajeActual={mensajeActual} />
      </div>
    </>
  );
};

export default Inicio;
