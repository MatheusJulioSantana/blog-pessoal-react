import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import homeLogo from '../../assets/Portal.gif'; // Importe a imagem necessária
import './Home.css';

function Home() {
  const { nome } = useContext(UserContext);

  return (
    <div className='bg-Primary flex justify-center fundoHome' style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>
      <div className='container grid grid-cols-2 text-Secundary'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className='text-5xl font-none' style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>Logar</h2>
          <h2 className='text-4xl'style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>Olá user: {nome}</h2>
          <Link to="/login" className='rounded border-2 text-Secundary bg-Primary border-dashed border-Secundary w-1/2 py-2 flex justify-center hover:bg-Primary hover:text-Secundary hover:border-Secundary'>
            Voltar
          </Link>
        </div>

        <div className="flex justify-center">
          <img src={homeLogo} alt="" className='w-2/3 img' />
        </div>
      </div>
    </div>
  );
}

export default Home;