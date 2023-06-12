import React, { useEffect, useState } from "react";
import axios from "axios";
import Bandeja from "../components/Bandeja";
import Mensaje from "../components/Mensaje";

import useMail from "../hooks/useMail";

import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const [bandeja, setBandeja] = useState([]);
  const [mensajeActual, setMensajeActual] = useState({});

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
      } catch (error) {}
    };

    getBandeja();

 
  }, []);

  const handleClickMensaje = (id) => {
    const mensaje = bandeja.find((item) => item.id === id);
    setMensajeActual(mensaje);
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

  if (!bandeja)
    return (
      <div className="text-xl font-semibold text-gray-800">No hay mensajes</div>
    );

  return (
    <>
      <div className="md:flex h-screen ">
        <div className="bg-gray-100 md:w-1/4 h-screen overflow-y-scroll dark:bg-gray-700 transition duration-500 ease-in-out">
          {bandeja &&
            bandeja.map((item: any) => (
              <Bandeja key={item.id} item={item}  handleClickMensaje={handleClickMensaje}/>
            ))}
        </div>

        <Mensaje mensajeActual={mensajeActual} />
      </div>
    </>
  );
};

export default Inicio;

