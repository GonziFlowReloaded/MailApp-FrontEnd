import { useContext } from "react"; 
import MailContext from "../context/MailProvider";

const useMail = () => {
    return useContext(MailContext);
}

export default useMail;