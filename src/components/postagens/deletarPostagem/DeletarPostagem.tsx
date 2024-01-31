import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Postagem from '../../../models/Postagem'
import { buscar, deletar } from '../../../services/Service'
import { RotatingLines } from 'react-loader-spinner'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarPostagem() {

    
    const [isLoading, setIsLoading] = useState<boolean>(false)

    
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)  

    
    const navigate = useNavigate()

    
    const { id } = useParams<{ id: string }>()   

    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

   
    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, { 
                headers: {
                    'Authorization': token                  
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {                 
              toastAlerta('O token expirou, favor logar novamente', 'info')     
                handleLogout()                                      
            }
        }
    }

   
    useEffect(() => {
        if (token === '') {
          toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id) 
        }
    }, [id])

    function retornar() {
        navigate("/postagens")
    }

   
    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, { 
                headers: {
                    'Authorization': token      
                }
            })

            toastAlerta('Postagem apagada com sucesso', 'sucesso')

        } catch (error) {
          toastAlerta('Erro ao apagar a Postagem', 'erro')
        }

        setIsLoading(false)
        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto bg-Primary text-Secundary'style={{ fontFamily: 'Share Tech, sans-serif' }}>
            <h1 className='text-4xl text-center my-4'>Deletar postagem</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

            <div className=' border-dashed rounded border-2 flex flex-col overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-Secundary text-Primary font-none  text-2xl border-Secundary'>Postagem</header>
                <div className="p-4 border-dashed rounded border-t-2 border-b-2 border-Secundary">
                    <p className='text-xl h-full'>{postagem.titulo}</p>
                    <p>{postagem.texto}</p>
                </div>
                <div className="flex">
                    <button className='w-full border-dashed border-Secundary text-Secundary font-none py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary hover:border-Primary' onClick={retornar}>Não</button>
                    <button className='w-full  rounded border-l-2 border-dashed border-Secundary text-Secundary font-none py-2 flex justify-center transition duration-300 ease-in-out transform hover:bg-Secundary hover:text-Primary hover:border-Primary' onClick={deletarPostagem}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }

                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem