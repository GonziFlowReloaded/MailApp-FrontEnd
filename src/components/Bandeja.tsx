const Bandeja = (item: any) => {
  const colors = [
    "bg-red-500",
    "bg-orange-300",
    "bg-yellow-400",
    "bg-green-600",
    "bg-teal-400",
    "bg-blue-500",
    "bg-indigo-600",
    "bg-purple-500",
    "bg-pink-400",
    "bg-red-400",
    "bg-orange-500",
    "bg-yellow-600",
    "bg-green-400",
    "bg-teal-500",
    "bg-blue-600",
    "bg-indigo-500",
    "bg-purple-400",
    "bg-pink-500",
  ];

  function RandomColorComponent() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return randomColor;
  }
  return (
    <div className="bg-gray-100 md:w-full  dark:bg-gray-700 overflow-y-auto transition duration-500 ease-in-out ">
      <div className="bg-white h-[200px] m-2 rounded-2xl shadow-md hover:bg-violet-200 cursor-pointer hover:shadow-2xl transition duration-500 ease-in-out dark:bg-gray-800 dark:hover:bg-gray-600 p-3">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 flex justify-center items-center text-white font-semibold rounded-full mr-2 ${RandomColorComponent()} dark:text-white`}
            >
              {item.nombre[0]}
              {item.apellido[0]}
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700 dark:text-white">
                {item.nombre} {item.apellido}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-300">
                {item.fecha}
              </span>
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-white">
            {item.asunto}
          </span>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-400 px-4 py-2 dark:text-gray-300">
            {item.mensaje.length > 10
              ? item.mensaje.slice(0, 100) + "..."
              : item.mensaje}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bandeja;
