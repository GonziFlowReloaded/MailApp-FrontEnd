const Bandeja = () => {
  return (
    <div className="bg-gray-100 md:w-full  ">
      <div className="bg-white h-[200px] m-2 rounded-2xl shadow-md hover:bg-violet-200 cursor-pointer hover:shadow-2xl transition duration-500 ease-in-out">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <div className="w-10 h-10 flex justify-center items-center text-white font-semibold bg-[#2e8efd] rounded-full mr-2">
              FA
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold">Fernando Aragón</span>
              <span className="text-xs text-gray-400">Hace 2 horas</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <span className="text-sm font-semibold">Asunto del mensaje</span>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-400 px-4 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bandeja;
