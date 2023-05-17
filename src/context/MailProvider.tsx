import { createContext, useState } from "react";

// @ts-ignore
import { bandeja as bandejaDB } from "../data/bandeja.js";

//@ts-ignore
const MailContext = createContext();

const MailProvider = ({ children }: any) => {
  const [bandeja, setBandeja] = useState(bandejaDB);

  console.log(bandeja);

  return <MailContext.Provider value={{}}>{children}</MailContext.Provider>;
};

export { MailProvider };

export default MailContext;
