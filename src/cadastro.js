import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import api from "./api";
function Cadastro(){
    const [nome,setNome]=useState('')
    const [valor,setValor]=useState('')
    const [data,setData]=useState('')
    const [hora,setHora]=useState('')
    const [perecivel,setPerecivel]=useState('')
    const [categoria,setCategoria]=useState('')

    const h = useHistory()
    
    const cadastrar = ()=>{
      if(nome !== '' && valor !== '' && data !== '' && hora !== '' &&  perecivel !== '' && categoria !== ''){
        api.inserir(nome,valor,data,hora,perecivel,categoria)
        alert('produto cadastrado com sucesso')
      }else{
          alert('os campos não devem estar em branco')
      }
    }
    return<>
        <h1>Cadastro</h1>
        <div className='formulario'>
            <input value={nome} onChange={e=>setNome(e.target.value)} placeholder='nome'/>
            <input value={valor} onChange={e=>setValor(e.target.value)} placeholder='valor'/>
            <input value={data} onChange={e=>setData(e.target.value)} placeholder='data'/>
            <input value={hora} onChange={e=>setHora(e.target.value)} placeholder='hora'/>
            <input value={perecivel} onChange={e=>setPerecivel(e.target.value)}placeholder='perecivel'/>
            <input value={categoria} onChange={e=>setCategoria(e.target.value)}placeholder='categoria'/>
            <button className='blue' onClick={cadastrar}>cadastrar</button>
            <button className='red' onClick={()=>h.push('/')}>voltar</button>
        </div>
    </>
}
export default Cadastro;