//@ts-ignore

import useMail from "../hooks/useMail";

interface Item{
  id: number;
  sender: string;
  date: string;
  subject: string;
  body?: string;
}


const Bandeja = ({ item }: { item: Item }) => {
  //@ts-ignore
  const { handleClickMensaje, mensajeActual } = useMail();

  return (
    <button
      type="button"
      onClick={() => handleClickMensaje(item.id)}
      className="bg-gray-100 md:w-full  dark:bg-gray-700 overflow-y-auto transition duration-500 ease-in-out "
    >
      <div
        className={` h-[200px] m-2 rounded-2xl shadow-md hover:bg-violet-200 cursor-pointer hover:shadow-2xl transition duration-500 ease-in-out  dark:hover:bg-gray-900 ${
          mensajeActual?.id === item?.id
            ? "bg-gray-200 dark:bg-gray-900"
            : "bg-white dark:bg-gray-800"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 flex justify-center items-center text-white font-semibold rounded-full mr-2 bg-violet-400 dark:bg-violet-400`}
            >
              {item.sender?.[0]}
              {item.sender?.[1]}
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700 dark:text-white">
                {item.sender}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-300">
                {item.date}
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-lg  font-semibold px-4 py-2 text-gray-700 dark:text-white text-left">
            {item.subject}
          </p>
        </div>

        <div className=" ">
          <p className="text-sm font-semibold text-gray-400 px-4 py-2 dark:text-gray-300 text-left ">
            {item.body?.length > 10
              ? item.body?.slice(0, 100) + "..."
              : item.body}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Bandeja;