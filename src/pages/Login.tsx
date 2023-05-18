import google from "../assets/img/google.svg";
import facebook from "../assets/img/facebook.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-white h-[550px] w-[500px] rounded-2xl shadow-md ">
      <h1 className="text-3xl font-bold text-center text-[#2e8efd] mt-5">
        Iniciar Sesion
      </h1>

      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-10">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none  rounded-2xl bg-gray-100 w-full  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-">
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
          />
        </div>

        <div className="flex justify-end mt-3">
          <a href="#" className="text-[#2e8efd] hover:text-[#2e8efd] text-sm">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="bg-[#2e8efd] w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesion
          </button>
        </div>

        <div className="flex justify-center mt-5">
          <p className="text-sm">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/auth/register"
              className="text-[#2e8efd] hover:text-[#2e8efd]"
            >
              Registrate
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-center mt-5 gap-3 ">
          <img src={google} alt="" className="w-7" />
          <img src={facebook} alt="" className="w-8" />
        </div>
      </form>
    </div>
  );
};

export default Login;
