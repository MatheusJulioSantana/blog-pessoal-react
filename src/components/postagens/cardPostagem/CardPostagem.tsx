import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagemProps {
  post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div className="border-Secundary border-2 border-dashed  flex flex-col rounded overflow-hidden justify-between"style={{ fontFamily: 'Share Tech, sans-serif' }}>
      <div>
        <div className="flex w-full bg-Secundary py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className="h-12 rounded-full" alt="" />
          <h3 className="text-xl font-bold text-center uppercase text-Primary">
          {post.usuario?.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg text-Secundary font-none uppercase" style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>{post.titulo}</h4>
          <p className="text-Secundary">{post.texto}</p>
          <p className="text-Secundary ">Tema: {post.tema?.descricao}</p>
          <p className="text-Secundary ">
            Data:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(post.data))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarPostagem/${post.id}`}
          className="w-full  rounded border-t-2 border-r-2 border-dashed border-Secundary text-Secundary font-none py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary  hover:border-Primary "
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarPostagem/${post.id}`}
          className="w-full  rounded border-t-2 border-dashed border-Secundary text-Secundary font-none py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary hover:border-Primary"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
