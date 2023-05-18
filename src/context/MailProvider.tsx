import { createContext, useState } from "react";

// @ts-ignore
import { bandeja as bandejaDB } from "../data/bandeja.js";

//@ts-ignore
const MailContext = createContext();

const MailProvider = ({ children }: any) => {
  const [bandeja, setBandeja] = useState(bandejaDB);
  const [mensajeActual, setMensajeActual] = useState(bandejaDB[0]);

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
