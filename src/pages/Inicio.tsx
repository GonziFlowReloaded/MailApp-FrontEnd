import Bandeja from "../components/Bandeja";
import Mensaje from "../components/Mensaje";
import useMail from "../hooks/useMail";


const Inicio = () => {
  //@ts-ignore
  const { bandeja, mensajeActual } = useMail();

  return (
    <>
      <div className="md:flex h-screen ">
        <div className="bg-gray-100 md:w-1/4 h-screen overflow-y-scroll dark:bg-gray-700 transition duration-500 ease-in-out">
          {bandeja.map((item: any) => (
            <Bandeja key={item.id} {...item} />
          ))}
        </div>

        <Mensaje mensajeActual={mensajeActual} />
      </div>
    </>
  );
};

export default Inicio;
