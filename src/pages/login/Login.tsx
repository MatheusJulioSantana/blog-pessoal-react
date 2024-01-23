import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

  //navegação do usuario na app
  let navigate = useNavigate();

  //unseContext = Acessa o context para obter informações
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext) 
//redireciona para a Home
  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])
// conecta-se ao input 
function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}
// que acessa e dispara a função handleLogin
function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}

return (
  <>
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center bg-container" style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>
      <form className="flex justify-center items-center flex-col w-1/2 gap-4 p-0 " onSubmit={login}>
        <h2 className="text-Secundary text-5xl ">De volta à aventura?</h2>
        <div className="flex flex-col w-full text-Secundary ">
          <label htmlFor="usuario">_Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder=" insira_o_usuario"
            className="rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary h-9"
            value={usuarioLogin.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full  text-Secundary">
          <label htmlFor="senha">_Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder=" insira_sua_senha"
            className="rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary h-9"
            value={usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
            type="submit"
            className="rounded border-2 border-dashed border-Primary bg-Secundary text-Primary font-bold w-1/2 py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Primary hover:text-Secundary hover:border-Secundary"
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
              <span>Ingressar</span>
            )}
          </button>

        <hr className="border-slate-800 w-full" />

        <p  className="text-Secundary"> 
          Ainda não tem uma conta?{' '}
          <Link to="/cadastro" className="text-Secundary hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
      <div className="fundoLogin hidden lg:block"></div>
    </div>
  </>
);
}

export default Login;