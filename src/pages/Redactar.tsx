import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Redactar = () => {
  const [mail, setMail] = useState("");
  const [subject, setsubject] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const nombre = localStorage.getItem("nombre");
    e.preventDefault();

    if ([].includes("")) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/send`,

        {
          mail,
          subject,
          body,
          nombre,
        }
      );

      navigate("/");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen overflow-hidden p-10">
      <div className="bg-white  w-full  h-full rounded-2xl shadow-md p-10  dark:bg-gray-900">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Escribir un nuevo mensaje
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex mt-5 gap-5 items-center">
            <input
              placeholder="Para:"
              type="text"
              className="border-0 w-1/2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-transparent dark:bg-gray-800 dark:text-white"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="flex mt-5 gap-5 items-center">
            <input
              placeholder="Asunto:"
              type="text"
              className="border-0 w-1/2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none  focus:border-transparent dark:bg-gray-800 dark:text-white"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
          </div>

          <div className="flex flex-col justify-center mt-5 gap-5 ">
            <textarea
              placeholder="Escriba el mensaje"
              className="border-0 w-full h-96 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none   focus:border-transparent dark:bg-gray-800 dark:text-white"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-center mt-10">
            <button
              className="bg-[#2e8efd] w-1/4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Redactar;
