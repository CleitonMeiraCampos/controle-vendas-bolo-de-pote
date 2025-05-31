import './alterar.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

/* Alterar Cliente */
function Alterar(props ){
   const type = props.type;
   const [clientes, setClientes] = useState([])

   fetch('http://localhost:8080/cliente', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    setClientes(data); // Inicializa clientes com todos os dados
  })
  .catch(err => console.error("Erro ao buscar clientes:", err));

  if(type == 'cliente'){
    return (
      <div className='container-alterar-cliente'>
        <h3 style={{textAlign: 'center'}}>Selecione o cliente que deseja alterar</h3>
        <select id="cliente">
          <option selected disabled >Selecione um Cliente</option>
          {clientes.map(cliente => (
            <option value={cliente.id} key={cliente.id}>{cliente.name}</option>
          ))}
        </select>
          <button>Editar cliente</button>
      </div>
    )
  }

   return(

    <div className="container-venda-adicionar">
        <label htmlFor="vendedor">Vendedor</label>
        <select
          id="vendedor"
          //onChange={(e) => setVendedorParam(e.target.value)}
        >
          <option selected disabled >Selecione um Vendedor</option>
          {/* {vendedores.map(vendedor => (
            <option value={vendedor.id} key={vendedor.id}> {vendedor.name}</option>
          ))} */}
        </select>
        <label htmlFor="cliente">Cliente</label>
        <select
          id="cliente"
          //onChange={(e) => setClienteParam(e.target.value)}
        >
          <option selected disabled >Selecione um Cliente</option>
        </select>
        <label htmlFor="valueVenda">Produto</label>
        <select
          id="produto"
          //onChange={(e) => setProdutoParam(e.target.value)}
        >
          <option selected disabled >Selecione um Produto</option>
        </select>
        <button onClick={() => {
          //saveSell(vendedorParam, clienteParam, produtoParam);
        }}>Salvar</button>
      </div>
   )

  
   
}

Alterar.propTypes = {
    type: PropTypes.string.isRequired, // 'type' deve ser uma string e é obrigatório
  };


export default Alterar;