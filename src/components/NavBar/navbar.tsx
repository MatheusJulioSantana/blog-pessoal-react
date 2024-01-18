import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
    <div className='w-full bg-Primary text-Secundary flex justify-center py-4 border-b-2 border-dashed border-Secundary 'style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>
          <div className="container flex justify-between text-lg ">
            <div className='text-2xl font-none'style={{ fontFamily: 'Press Start 2P, sans-serif' }}>_portalDev</div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>/login</Link>
              <Link to='/home' className='hover:underline'>/home</Link>
              <div className='hover:underline'>/postagens</div>
              <div className='hover:underline'>/temas</div>
              <div className='hover:underline'>/cadastrar tema</div>
              <div className='hover:underline'>/perfil</div>
              <div className='hover:underline'>/sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar