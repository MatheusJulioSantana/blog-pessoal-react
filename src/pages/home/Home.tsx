import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import homeLogo from "../../assets/Portal1.gif";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import "./Home.css";

function Home() {
  const { nome } = useContext(UserContext);

  return (
    <>
      <div
        className="bg-Primary flex justify-center fundoHome"
        style={{ fontFamily: "Share Tech Mono, sans-serif" }}
      >
        <div className="container grid grid-cols-2 text-Secundary ">
          <div className="flex flex-col gap-4 items-center justify-center py-4 ">
            <h2
              className="text-5xl font-none "
              style={{ fontFamily: "Share Tech Mono, sans-serif" }}
            >
              Bem vinde!
            </h2>
            <h2
              className="text-4xl "
              style={{ fontFamily: "Share Tech Mono, sans-serif" }}
            >
              Olá user: {nome}
            </h2>
            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className="border-2 border-dashed rounded bg-Primary text-Secundary py-2 px-4 hover:bg-Secundary hover:text-Primary hover:border-Primary transition duration-300 ease-in-out transform">
                <Link to="/postagens">Ver Postagens</Link>
              </button>
            </div>
          </div>
          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-2/3 img" />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}
export default Home;