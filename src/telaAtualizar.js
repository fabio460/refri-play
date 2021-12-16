import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import api from './api';
function Atualizar(){
    const [lista,setLista]=useState([])
    const [nome,setNome]=useState()
    const [valor,setValor]=useState()
    const [data,setData]=useState()
    const [hora,setHora]=useState()
    const [perecivel,setPerecivel]=useState()
    const [categoria,setCategoria]=useState()
    
    const h = useHistory()
    const id = localStorage.getItem('id')

    const atualizar = ()=>{
        api.atualizar(id,nome,valor,data,hora,perecivel,categoria)
        alert('produto atualizado com sucesso')
    }

    async function pegarLista(){
        const p =await api.listarPorId(id)
        setLista(p)
    }
    useEffect(()=>{
       pegarLista()
       
    })
   
    return <>
        <h1>Atualizar</h1>
        <div className='formulario'>
            <input value={nome} onChange={e=>setNome(e.target.value)} placeholder={lista.nome}/>
            <input value={valor} onChange={e=>setValor(e.target.value)} placeholder={lista.valor}/>
            <input value={data} onChange={e=>setData(e.target.value)} placeholder={lista.data}/>
            <input value={hora} onChange={e=>setHora(e.target.value)} placeholder={lista.hora}/>
            <input value={perecivel} onChange={e=>setPerecivel(e.target.value)}placeholder={lista.perecivel}/>
            <input value={categoria} onChange={e=>setCategoria(e.target.value)}placeholder={lista.categoria}/>
            <button className='blue' onClick={atualizar}>atualizar</button>
            <button className='red' onClick={()=>h.push('/')}>voltar</button>
        </div>
        
    </>
}
export default Atualizar;