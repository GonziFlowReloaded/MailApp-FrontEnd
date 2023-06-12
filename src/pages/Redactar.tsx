//@ts-nocheck
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextEditor from "../components/TextEditor";
import { Alert, Space } from "antd";

const Redactar = () => {
  const [mail, setMail] = useState("");
  const [subject, setsubject] = useState("");
  const [body, setBody] = useState("");
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [aviso, setAviso] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const nombre = localStorage.getItem("nombre");
    e.preventDefault();

    if ([].includes("")) {
      return;
    }

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_URL}/send`, {
        mail,
        subject,
        body: value,
        nombre,
      });

      
      setShowAlert(true);
      setAviso(data.status);

      setTimeout(() => {
        setShowAlert(false);
        setAviso("");
        navigate("/");
      }, 2000);

      
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-hidden py-10">
      {showAlert && (
        <Space direction="vertical">
          <Alert message={aviso} type="success" />
        </Space>
      )}

      <div className="bg-white w-full h-full rounded-2xl shadow-md p-10 dark:bg-gray-900">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Escribir un nuevo mensaje
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex mt-5 gap-5 items-center">
            <input
              placeholder="Para:"
              type="text"
              className="border-0 w-full md:w-1/2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-transparent dark:bg-gray-800 dark:text-white"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="flex mt-5 gap-5 items-center">
            <input
              placeholder="Asunto:"
              type="text"
              className="border-0 w-full md:w-1/2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-transparent dark:bg-gray-800 dark:text-white"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
          </div>

          <div className="mt-10">
            <TextEditor value={value} setValue={setValue} />
          </div>

          <div className="flex justify-center mt-[50px] gap-5 items-center">
            <button
              className="bg-[#2e8efd] w-full md:w-1/4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
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
