
import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import api from './api'
function Home(){
    const [lista,setLista]=useState([])
    const [listaTotal,setListaTotal]=useState([])
    const [loading,setLoading]= useState(false)
    const h = useHistory()
    
    async function atualizarTela(){       
            setLoading(false)
            const p = await api.listar()
            let aux = p.slice(0,5)
            setLista(aux)
            setListaTotal(p)
            setLoading(true)
            
    }

    useEffect(()=>{
        
        atualizarTela()
        
    },[])

    const deletar = (e)=>{
        api.deletar(e.target.id)
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }

    const update = (e)=>{
        const id = e.target.id
        h.push('/atualizar')
        localStorage.setItem('id',id)
        
    }

    // estou removendo a duplicata da lista  
    const [pagina] = useState([])
    const paginaSemDuplicata = [...new Set(pagina)] 
    var chave = 1;
    var finalDaLista = listaTotal.length
    listaTotal.map((item,key)=>{
        
        if( ((key+1) % 5) === 0 ){    
           pagina.push(key+1)
           chave=key+1
        }
        return ''; 
    })
    paginaSemDuplicata.push(finalDaLista)
    console.log(listaTotal)
    const paginacao = async(e)=>{
      
        var inicio = e.target.name
        var fim = e.target.id


        if(fim > chave){
            inicio = chave 
            fim = finalDaLista 
        }

        console.log("inicio:"+inicio+" "+"fim:"+fim+" chave:"+chave)
        let p =await api.listar()
        let l = p.slice(inicio,fim)
        setLista(l)


        document.querySelectorAll('.btn').forEach(e=>{
            e.classList.remove('ativo')
        })
        e.target.classList.add('ativo')
    }
   
    return<>
        
        <div className="tela_home">
            <header>
                <div className="logo">logo</div>
                <button className="blue" onClick={()=> h.push('/cadastro')}>cadastro</button>
            </header>
            <h1>Produtos</h1>

            <table className="tabela">
                <th>id</th>
                <th>nome</th>
                <th>preço</th>
                <th>data </th>
                <th>hora</th>
                <th>é perecível</th>
                <th>categoria</th>
                <th>ações</th>
                {lista.map((item,key)=>{
                    
                    return <tr className="item">
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.valor}</td>
                        <td>{item.data}</td>
                        <td>{item.hora}</td>
                        <td>{item.perecivel}</td>
                        <td>{item.categoria}</td>
                        <td>
                            <button className="red" id={item.id} onClick={deletar}>deletar</button>
                            <button className="blue" id={item.id} onClick={update}>atualizar</button>
                        </td>
                    </tr>
                })}
            </table> 
            {paginaSemDuplicata.map((item,key)=>{
                return <button className="btn" onClick={paginacao} name={item - 5} id={item} >{key+1}</button>
            })}
        </div>
    </>
}
export default Home;