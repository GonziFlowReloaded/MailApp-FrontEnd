import Bandeja from "../components/Bandeja";
import Mensaje from "../components/Mensaje";

import useMail from "../hooks/useMail";

const Inicio = () => {
  //@ts-ignore

  const { bandeja, mensajeActual } = useMail();

  if(!bandeja) return <div className="text-xl font-semibold text-gray-800">No hay mensajes</div>;

  return (
    <>
      <div className="md:flex h-screen ">
        <div className="bg-gray-100 md:w-1/4 h-screen overflow-y-scroll dark:bg-gray-700 transition duration-500 ease-in-out">
          {bandeja.map((item: any) => (
            <Bandeja item={item} key={item.id} />
          ))}
        </div>

        <Mensaje mensajeActual={mensajeActual} />
      </div>
    </>
  );
};

export default Inicio;
