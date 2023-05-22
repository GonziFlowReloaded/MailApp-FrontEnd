//@ts-nocheck

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alerta, setAlerta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([username, password, repeatPassword].includes("")) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    if (password !== repeatPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/register`,

        {
          username,
          password,
        }
      );

      console.log(data);

      setAlerta(data.status);

      setUsername("");
      setPassword("");
      setRepeatPassword("");

      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white h-[550px] w-[500px] rounded-2xl shadow-md ">
      <h1 className="text-3xl font-bold text-center text-[#2e8efd] mt-5">
        Registrarse
      </h1>

      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-10">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none  rounded-2xl bg-gray-100 w-full  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-10">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none  rounded-2xl bg-gray-100 w-full  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password2"
          >
            Confirmar Contraseña
          </label>
          <input
            className="shadow appearance-none  rounded-2xl bg-gray-100 w-full  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password2"
            type="password"
            placeholder="******************"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="bg-[#2e8efd] w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Crear Cuenta
          </button>
        </div>

        <div className="flex justify-center mt-5">
          <p className="text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/auth/login"
              className="text-[#2e8efd] hover:text-[#2e8efd]"
            >
              Inicia Sesion
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
