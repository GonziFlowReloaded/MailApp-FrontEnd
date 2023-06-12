//@ts-nocheck
import { createContext, useState, useEffect } from "react";
import axios from "axios";

// @ts-ignore

//@ts-ignore
const MailContext = createContext();

const MailProvider = ({ children }: any) => {
  const [bandeja, setBandeja] = useState([]);
  const [mensajeActual, setMensajeActual] = useState({});
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const getBandeja = async () => {
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_URL}/buzon`, {
          nombre: localStorage.getItem("nombre"),
        });

        setBandeja(data.emails);
        setMensajeActual(data.emails[0]);
      } catch (error) {
        // Manejo de errores
      }
    };

    getBandeja();
  }, []);

  const handleClickMensaje = (id: number) => {
    const mensaje = bandeja.find((item: any) => item.id === id);
    setMensajeActual(mensaje);
  };

  return (
    <MailContext.Provider
      value={{
        handleClickMensaje,
        auth,
        setAuth,
        bandeja,
        mensajeActual,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider };

export default MailContext;
