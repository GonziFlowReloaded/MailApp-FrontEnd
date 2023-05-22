const Mensaje = ({ mensajeActual }) => {
  if (!mensajeActual) {
    return <div className="text-xl font-semibold text-gray-800">No hay mensajes</div>;
  }
  return (
    <div className="flex-1 m-5 bg-white rounded-2xl shadow-md dark:bg-gray-800 transition duration-500 ease-in-out p-5">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <div
            className={`w-10 h-10 flex justify-center items-center text-white font-semibold rounded-full mr-2 dark:text-white bg-violet-400 dark:bg-violet-400`}
          >
            {mensajeActual.sender?.[0]}
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700 dark:text-white">
              {mensajeActual.sender}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-300">
              {mensajeActual.date}
            </span>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-violet-400 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-violet-400 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-violet-400 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>

      <div className="px-4 py-2 flex justify-between items-center ">
        <span className="text-3xl font-semibold dark:text-white">
          {mensajeActual.subject}
        </span>
        <p className="text-sm font-semibold text-gray-400 dark:text-white">
          {mensajeActual.date}
        </p>
      </div>

      <div className="px-4 py-2">
        <p className="text-sm font-semibold text-gray-800 px-4 py-2 dark:text-white">
          {mensajeActual.body}
        </p>
      </div>
      <p className=" flex items-center text-sm font-semibold text-blue-400 px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        <span>Responder a {mensajeActual.sender}</span>
      </p>
    </div>
  );
};

export default Mensaje;
