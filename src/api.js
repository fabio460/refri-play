import axios from "axios";

const url = 'http://localhost:8000/api/produto'
const api = {
    listar: ()=>{
        const p = axios(url)
        .then(res => res.data)
        return p
    },
    listarPorId: (id)=>{
      return axios.get(`http://localhost:8000/api/produto/${id}`).then(res=>res.data)
    },
    inserir: (nome,valor,data,hora,perecivel,categoria)=>{
       try {
        axios.post(url,{
            nome,valor,data,hora,perecivel,categoria
        })
        .then(res=>console.log(`produto ${nome} inserido com sucesso`))
       } catch (error) {
           console.log('falha na inserção:'+error)
       }
    },

    atualizar: (id,nome,valor,data,hora,perecivel,categoria)=>{
       axios.put(url+'/'+id,{
        nome,valor,data,hora,perecivel,categoria
       })
    },

    deletar: (id)=>{
       axios.delete(url+'/'+id)
    }
}
export default api;