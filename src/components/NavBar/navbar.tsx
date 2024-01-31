import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div
        className="w-full bg-Primary text-Secundary flex justify-center py-4 border-b-2 border-dashed border-Secundary "
        style={{ fontFamily: "Share Tech Mono, sans-serif" }}
      >
        <div className="container flex justify-between text-lg ">
          <Link
            to="/home"
            className="text-2xl font-none"
            style={{ fontFamily: "Share Tech Mono, sans-serif" }}
          >
            _portalDev
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastroTema" className="hover:underline">
              Cadastrar tema
            </Link>
            <div className="hover:underline">Perfil</div>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
