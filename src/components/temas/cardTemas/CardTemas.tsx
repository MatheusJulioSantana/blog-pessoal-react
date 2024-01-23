import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import './CardTemas.css'

// Definimos uma Interface chamada CardTemasProps, e indicamos que sua estrutura contém uma propriedade chamada tema
interface CardTemaProps {
    tema: Tema  // A propriedade tema é um objeto da Model Tema, ou seja, um objeto com id e descricao
}

function CardTemas({ tema }: CardTemaProps) {   // Definimos que o CardTemas recebe uma propriedade chamada tema e sua estrutura segue a Interface CardTemaProps
    return (
        <div className="bg-container"style={{ backgroundColor: '#1E1D39', fontFamily: 'Share Tech , sans-serif' }}>
        <div className="fundoCardTemas rounded border-2 border-dashed border-Secundary">
        <div className="round flex flex-col  overflow-hidden justify-between">
            <header className='py-2 px-6 font-bold text-2xl border-b-2 rounded border-dashed bg-Secundary text-Primary'style={{ fontFamily: 'Share Tech Mono, sans-serif' }}>
                /Tema
            </header>

            <p className='p-8 text-3xl bg-Primary  text-Secundary h-full'>
                {tema.descricao}    {/* tema é o objeto que é recebido por meio da props. e, descricao é o atributo do objeto */}
            </p>

            <div className="flex">
                {/* Essa rota envia o usuário para o formulário de edição, passando em sua url, o id do Tema que vai ser editado */}
                <Link to={`/editarTema/${tema.id}`} className='w-full  rounded border-t-2 border-r-2 border-dashed border-Secundary text-Secundary font-bold py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary  hover:border-Primary '>
                    <button>Editar</button>
                </Link>
                
                <div className="border-t-2 border-dashed border-Primary"></div>

                {/* Essa rota envia o usuário para o formulário de exclusão, passando em sua url, o id do Tema que vai ser excluído */}
                <Link to={`/deletarTema/${tema.id}`} className='w-full  rounded border-t-2 border-dashed border-Secundary text-Secundary font-bold py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary  hover:border-Primary'>
                    <button>Deletar</button>
                </Link>

            </div>
        </div>
        </div>
        </div>
    )
}

export default CardTemas