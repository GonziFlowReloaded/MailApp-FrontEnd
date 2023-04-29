const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white h-[500px] w-[500px] md:h-[600px] mx-10 md:mx-0 rounded-3xl shadow-xl">
        <div className="flex justify-center mt-10">
          <h1 className="font-bold text-2xl">Iniciar sesion</h1>
        </div>

        <div className="m-10">
          <form>
            <div>
              <input
                className="w-full bg-gray-200 py-3 px-3 rounded-3xl mt-3 placeholder:text-gray-500"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div>
              <input
                className="w-full bg-gray-200 py-3 px-3 rounded-3xl  mt-10 placeholder:text-gray-500"
                placeholder="********"
                type="password"
                name="password"
                id="password"
              />
            </div>

            <div className="flex justify-center mt-16">
              <button className="bg-[#7884e4] text-white py-3 px-3 font-bold rounded-3xl w-full hover:bg-[#5f6ac4]">
                Iniciar sesion
              </button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-[#7884e4] mt-5">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <div className="flex justify-center mt-10">
              <p>
                ¿No tienes una cuenta?{" "}
                <a href="#" className="text-[#7884e4]">
                  Registrate
                </a>
              </p>
            </div>

            <div className="flex justify-center mt-5 gap-4">
              <p>google</p>
              <p>facebook</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
