import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../utils/toastAlerta";

function DeletarTema() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [tema, setTema] = useState<Tema>({} as Tema);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta('Você precisa estar logado', 'info');
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/temas");
  }

  async function deletarTema() {
    setIsLoading(true);

    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta('Tema apagado com sucesso', 'sucesso');
    } catch (error) {
      toastAlerta('Erro ao apagar o Tema', 'erro');
    }

    retornar();
  }
  return (
    <div
      className="container w-1/3 mx-auto"
      style={{ fontFamily: "Share Tech Mono, sans-serif" }}
    >
      <h1
        className="text-4xl text-center my-4 text-Secundary"
        style={{ fontFamily: "Share Tech Mono, sans-serif" }}
      >
        Deletar tema
      </h1>

      <p
        className="text-center font-none mb-4 text-Secundary"
        style={{ fontFamily: "Share Tech, sans-serif" }}
      >
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>

      <div className="rounded border-2 border-dashed border-Secundary">
        <header
          className="py-2 px-6 font-bold text-2xl border-b-2 rounded border-dashed bg-Secundary text-Primary"
          style={{ fontFamily: "Share Tech Mono, sans-serif" }}
        >
          /Tema
        </header>
        <p
          className="p-8 text-3xl bg-Primary  text-Secundary h-full"
          style={{ fontFamily: "Share Tech Mono, sans-serif" }}
        >
          {tema.descricao}
        </p>
        <div className="flex">
          <button
            className="w-full  rounded border-t-2 border-r-2 border-dashed border-Secundary text-Secundary font-bold py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary hover:border-Primary"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full  rounded border-t-2 border-r-2 border-dashed border-Secundary text-Secundary font-bold py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary hover:border-Primary "
            onClick={deletarTema}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
