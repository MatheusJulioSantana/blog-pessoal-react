import axios from "axios";
//contrução de objeto de config - contecanto ao back end
const api = axios.create({
  baseURL: 'https://blogpessoal-p61d.onrender.com/' //+usuario/cadastrar | {dados do user}
})
//função de serviço
export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data) //recebe o retorno do back e salvar os dados do usuario
}

export const login = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Service que será usada para BUSCAR informações ao Back-End
export const buscar = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header) // espera a requisição do tipo GET, enviada pela rota informada dentro do parametro URL, seja finalizada. Também enviamos o Token através do parametro HEADER
  setDados(resposta.data)                     // salva as info retornadas em uma variavel de estado
}

// Service que será usada para CADASTRAR informações no Back-End
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header) // espera a requisição do tipo POST, enviada pela rota informada dentro do parametro URL, seja finalizada. Também enviamos o Token através do parametro HEADER
  setDados(resposta.data)                             // salva as info retornadas em uma variavel de estado
}

// Service que será usada para ATUALIZAR informações do Back-End
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)  // espera a requisição do tipo POST, enviada pela rota informada dentro do parametro URL, seja finalizada. Também enviamos o Token através do parametro HEADER
  setDados(resposta.data)                             // salva as info retornadas em uma variavel de estado
}

// Service que será usada para APAGAR informações do Back-End
export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header)   // espera a requisição do tipo DELETE, enviada pela rota informada dentro do parametro URL, seja finalizada. Também enviamos o Token através do parametro HEADER
}