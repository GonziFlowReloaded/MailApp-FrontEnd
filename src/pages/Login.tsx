const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white h-[500px] w-[500px] rounded-3xl shadow-lg">
        <div className="flex justify-center items-center h-[100px]">
          <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
        </div>

        <form action="">
            <div className="">
                <label htmlFor="">Correo</label>
                <input type="text"/>
            </div>
        </form>

        
      </div>
    </div>
  );
};

export default Login;
