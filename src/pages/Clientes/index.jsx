import { useState, useEffect } from 'react';
import imgSearch from "../../assets/search.png";
import loadingImg from "../../assets/loading.gif";
import './clientes.css'

function ClientePage() { 
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Adiciona o estado para o termo de busca

  // Função para buscar todos os clientes
  function findAllClientes() {

      setLoading(true)

      fetch('http://localhost:8080/cliente', {
          method: 'GET'
      })
      .then(res => res.json())
      .then(data => {
          setLoading(false)
          setClientes(data); // Inicializa clientes com todos os dados
      })
      .catch(err => console.error("Erro ao buscar clientes:", err));
  }

  // Função para buscar cliente pelo nome
  function findByName(Name) {
      
      setLoading(true)

      if (Name.trim() === "") {
          // Se o campo de pesquisa estiver vazio, restaura a lista original
          findAllClientes(); 
          return;
      }

      fetch(`http://localhost:8080/cliente/by-name?name=${Name}`, {
          method: 'GET'
      })
      .then(res => res.json())
      .then(cliente => {
          if (cliente) {
              // Verifica se o retorno é um array ou objeto
              if (Array.isArray(cliente)) {
                  setLoading(false)
                  setClientes(cliente); // Substitui pela lista de clientes se for um array
              } else {
                  setLoading(false)
                  setClientes([cliente]); // Substitui pela lista contendo um único cliente
              }
          } else {
              setLoading(false)
              setClientes([]); // Limpa a lista se nenhum cliente for encontrado
          }
      })
      .catch(err => console.error("Erro ao buscar cliente por nome:", err));
  }

  useEffect(() => {
      findAllClientes(); // Busca todos os clientes ao montar o componente
  }, []);

  return (
     <div className='container-main-page'>
      <section>
              <div className="page">
                  <div className='search'>
                      <input
                          id='pesquisa'
                          type="search"
                          placeholder='Digite o nome do cliente'
                          value={searchTerm} // Controla o valor do campo com o estado
                          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado de pesquisa
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
                  <div className='container-results-clientes'>
                      {loading == true? (
                          <div className='loading-container'>
                              <img className='loading' src={loadingImg} alt="loading"/>
                          </div>
                      ):
                      (<div className="container-cliente">
                                  <div className='options'>
                                        <div className='edit'>Editar</div>
                                        <div className='delete'>Delete</div>
                                        <div className='pay'>Pagar</div>
                                  </div>
                                  {clientes.map(cliente => (
                                      <div key={cliente.id} className='cliente'>
                                          <div className='cliente-inside'>
                                              <p><strong>Nome: </strong> {cliente.name}</p>
                                              <p><strong>Saldo Devedor: </strong> {cliente.valueToPay}$</p>
                                          </div>
                                      </div>
                                  ))}
                      </div>
                      )}
                  </div>
              </div>
          </section>
      </div>
  );
}

export default ClientePage;
