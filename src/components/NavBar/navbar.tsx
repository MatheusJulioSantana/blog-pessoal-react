import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  // Criamos uma constante que recebe o hook useNavigate, para podermos redirecionar o usuário
  const navigate = useNavigate()

  // Pega as informações que queremos do nosso Contexto através do hook useContexo
  const { handleLogout } = useContext(AuthContext)

  // Função que vai ser chamada ao clique da opção SAIR, que por sua vez, chama a função handleLogout do Contexto
  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  return (
    <>
    <div className='w-full bg-Primary text-Secundary flex justify-center py-4 border-b-2 border-dashed border-Secundary 'style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>
          <div className="container flex justify-between text-lg ">
            <div className='text-2xl font-none'style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>_portalDev</div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>/login</Link>
              <Link to='/home' className='hover:underline'>/home</Link>
              <div className='hover:underline'>/postagens</div>
              <Link to='/temas' className='hover:underline'>/temas</Link>
              <Link to='/cadastroTema' className='hover:underline'>/cadastrar_tema</Link>
              <div className='hover:underline'>/perfil</div>
              <Link to='' onClick={logout} className='hover:underline'>/Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar