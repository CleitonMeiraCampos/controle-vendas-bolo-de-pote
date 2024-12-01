import imgSearch from '../../assets/search.png'
import { useState } from 'react'


function AlterarClientes(){
    
    
    const [clientes, setClientes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')


    function findByName(searchTerm){ 
        fetch(`http://localhost:8080/cliente/by-name?name=${searchTerm}`, {
        method: 'GET'
    }).then(res => res.json())
    .then(data => {
        setClientes(data);
    }
    )
    }

    return (
        <div className="container-alterar">
            <div className='search'>
                      <input
                          id='pesquisa'
                          type="search"
                          onChange={(e) => {setSearchTerm(e.target.value)}}
                          onKeyDown={(e) => {
                              if(e.key == 'Enter'){
                                  findByName(searchTerm)
                              }
                          } }
                      />
                      <img
                          src={imgSearch}
                          alt="icon-pesquisa"
                          onClick={() => findByName(searchTerm)} // Usa o valor do estado na função de busca
                      />
                  </div>
                  <div className='clientes-localizados'>
                    {
                        clientes.map(cliente => {
                            <div key={cliente.id} className='cliente'>
                                <div className='cliente-inside'>
                                    <p><strong>Nome: </strong> {cliente.name}</p>
                                    <p><strong>Saldo Devedor: </strong> {cliente.valueToPay}$</p>
                                </div>
                            </div>
                        })
                    }
                  </div>
                  
        </div>
    )
}

export default AlterarClientes;