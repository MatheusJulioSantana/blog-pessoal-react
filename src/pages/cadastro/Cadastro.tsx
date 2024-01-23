import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'

function Cadastro() {

  //Navegar o usuario pela aplicação
  let navigate = useNavigate()
  
  //Variavel Estado
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  //Variavel Estado
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center bg-container" style={{ fontFamily: 'Share Tech, sans-serif' }}>
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3 text-Secundary' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-Secundary text-5xl'style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>Cadastrar</h2>
          <div className="flex flex-col w-full ">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder=" insira_seu_Nome"
              className="rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary h-9"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder=" insira_o_usuario"
              className="rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary h-9"
              value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder=" insira_a_url_da_foto"
              className="rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary h-9"
              value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=" insira_sua_senha"
              className="rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary h-9"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder=" confirme_sua_senha"
              className="rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary h-9"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className=' rounded border-2 border-dashed border-Primary bg-Secundary text-Primary font-bold w-1/2 py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Primary hover:text-Secundary hover:border-Secundary' onClick={back}>
              Cancelar
            </button>
            <button className='rounded border-2 border-dashed border-Primary bg-Secundary text-Primary font-bold w-1/2 py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Primary hover:text-Secundary hover:border-Secundary' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro