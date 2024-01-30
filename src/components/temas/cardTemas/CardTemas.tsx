import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";
import "./CardTemas.css";

interface CardTemaProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemaProps) {
  return (
    <div
      className="bg-container"
      style={{
        backgroundColor: "#1E1D39",
        fontFamily: "Share Tech , sans-serif",
      }}
    >
      <div className="fundoCardTemas rounded border-2 border-dashed border-Secundary">
        <div className="round flex flex-col  overflow-hidden justify-between">
          <header
            className="py-2 px-6 font-bold text-2xl border-b-2 rounded border-dashed bg-Secundary text-Primary"
            style={{ fontFamily: "Share Tech Mono, sans-serif" }}
          >
            /Tema
          </header>

          <p className="p-8 text-3xl bg-Primary  text-Secundary h-full">
            {tema.descricao}
          </p>

          <div className="flex">
            <Link
              to={`/editarTema/${tema.id}`}
              className="w-full  rounded border-t-2 border-r-2 border-dashed border-Secundary text-Secundary font-bold py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary  hover:border-Primary "
            >
              <button>Editar</button>
            </Link>

            <div className="border-t-2 border-dashed border-Primary"></div>

            <Link
              to={`/deletarTema/${tema.id}`}
              className="w-full  rounded border-t-2 border-dashed border-Secundary text-Secundary font-bold py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary  hover:border-Primary"
            >
              <button>Deletar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTemas;
