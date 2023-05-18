//@ts-ignore
import { getRandomColor } from "../helpers/randomColor";

const Bandeja = (item: any) => {
  const colorRandom = getRandomColor();

  return (
    <div className="bg-gray-100 md:w-full  dark:bg-gray-700 overflow-y-auto transition duration-500 ease-in-out ">
      <div className="bg-white h-[200px] m-2 rounded-2xl shadow-md hover:bg-violet-200 cursor-pointer hover:shadow-2xl transition duration-500 ease-in-out dark:bg-gray-800 dark:hover:bg-gray-900">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 flex justify-center items-center text-white font-semibold rounded-full mr-2 ${colorRandom}`}
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
