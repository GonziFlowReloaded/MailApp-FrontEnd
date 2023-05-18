const Redactar = () => {
  return (
    <div className="h-screen overflow-hidden p-10">
      <div className="bg-white  w-full  h-full rounded-2xl shadow-md p-10  dark:bg-gray-900">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Escribir un nuevo mensaje
        </h1>

        <form>
          <div className="flex mt-5 gap-5 items-center">
            
            <input
            placeholder="Para:"
              type="text"
              className="border-0 w-1/2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-transparent dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="flex mt-5 gap-5 items-center">
            
            <input
            placeholder="Asunto:"
              type="text"
              className="border-0 w-1/2 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none  focus:border-transparent dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="flex flex-col justify-center mt-5 gap-5 ">
            
            <textarea placeholder="Escriba el mensaje" className="border-0 w-full h-96 border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none   focus:border-transparent dark:bg-gray-900 dark:text-white"></textarea>
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
