import { createContext, useState, useEffect } from "react";
import axios from "axios";

// @ts-ignore


//@ts-ignore
const MailContext = createContext();

const MailProvider = ({ children }: any) => {
  const [bandeja, setBandeja] = useState([]);
  const [mensajeActual, setMensajeActual] = useState({});

  useEffect(() => {
    const getMensajes = async () => {
      try {
        const nombre = localStorage.getItem("nombre");

        const { data } = await axios.post(`${import.meta.env.VITE_URL}/buzon`, {
          nombre,
        });

        console.log(data);

        setBandeja(data.emails);
        console.log(data.emails[0]);
        setMensajeActual(data.emails[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getMensajes();
  }, []);

  

  const handleClickMensaje = (id: number) => {
    const mensaje = bandeja.find((item: any) => item.id === id);
    setMensajeActual(mensaje);
  };

  return (
    <MailContext.Provider
      value={{
        bandeja,
        mensajeActual,
        handleClickMensaje,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider };

export default MailContext;
