import { useState, useEffect } from "react";
import axios from "axios";

const Contactos = () => {

  const [amigos, setAmigos] = useState([]);

  useEffect(() => {
    const obtenerContactos = async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/contactos_get`,
        {
          nombre: localStorage.getItem("nombre"),
        },
        {
          headers: {
            contentType: "application/json",
          },
        }
      );

    console.log(data.contactos);

      setAmigos(data.contactos);
    };

    obtenerContactos();
  }
  , []);
  return (
    <>
      <div className="h-screen overflow-hidden p-3">
        <div className="bg-white  w-full  h-full rounded-2xl shadow-md p-5  dark:bg-gray-800">
          <div className="">
            <table className="table-auto w-full">
              <thead>
                <tr className=" text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left dark:text-white"> Nombre</th>
                  
                  <th className="py-3 px-6 text-left dark:text-white">Email</th>
                
                </tr>
              </thead>

              {amigos?.map((item) => (
                
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex justify-center items-center text-white font-semibold bg-violet-500 rounded-full mr-2">
                        {item?.nombre?.[0]}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {item?.nombre}
                      </span>
                    </div>
                  </td>
                 

                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-800 dark:text-white">
                        {item?.mail}
                      </span>
                    </div>
                  </td>
                
                </tr>
              </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactos;
