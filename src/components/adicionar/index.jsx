import PropTypes from 'prop-types';
import './adicionar.css';
import { useEffect, useState } from 'react';

function Adicionar(props) {
  const type = props.type;  // A propriedade 'type' (minúscula) do props
  const [nameCliente, setNameCliente] = useState('');
  const [valueToPay, setValueToPay] = useState('');

  // Implementação select|option
  const [vendedores, setVendedores] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);

  // Estados para vendedor, cliente e produto selecionados
  const [vendedorParam, setVendedorParam] = useState(null);
  const [clienteParam, setClienteParam] = useState(null);
  const [produtoParam, setProdutoParam] = useState(null);

  let dataHoraAtual;

  async function salvarCliente() {
    if (valueToPay === '') {
      setValueToPay('0');
    }

    fetch('http://localhost:8080/cliente', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": nameCliente,
        "valueToPay": parseFloat(valueToPay)
      })
    })
      .then(res => console.log(res.headers.status))
      .catch(console.log('erro ao salvar cliente'));

    setNameCliente('');
    setValueToPay('');
  }

  useEffect(() => {
    if (type === 'venda') {
      fetch('http://localhost:8080/vendedor', { method: 'GET' })
        .then(res => res.json())
        .then(data => setVendedores(data));

      fetch('http://localhost:8080/cliente', { method: 'GET' })
        .then(res => res.json())
        .then(data => setClientes(data));

      fetch('http://localhost:8080/produto', { method: 'GET' })
        .then(res => res.json())
        .then(data => setProdutos(data));
    } else if (type === 'cliente') {
      // Futuramente será atualizado the component client finding dinamic of backend
    }
  }, [type]);

  function saveSell(vendedor, cliente, produto) {
    dataHoraAtual = new Date().toISOString().split('T')[0];

    fetch('http://localhost:8080/sell', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'vendedor': {
          id: vendedor,
        },
        'cliente': {
          id: cliente,
        },
        'valorVenda': produto,
        'data': dataHoraAtual
      })
    }).then(res => console.log('Status da requição: '+ res.status))
      .catch(err => console.log(err));
  }

  if (type === 'cliente') {
    return (
      <div className="container-adicionar-cliente">
        <label htmlFor="nome-cliente">Nome do Cliente:</label>
        <input type="text" onChange={e => setNameCliente(e.target.value)} value={nameCliente} id="nome-cliente" />
        <label htmlFor="valueToPay">Valor a Pagar:</label>
        <input type="text" onChange={e => setValueToPay(e.target.value)} value={valueToPay} id="valueToPay" />
        <button onClick={salvarCliente}>Salvar</button>
      </div>
    );
    // Tela de adição de uma nova venda
  } else if (type === 'venda') {
    return (
      <div className="container-venda-adicionar">
        <label htmlFor="vendedor">Vendedor</label>
        <select
          id="vendedor"
          onChange={(e) => setVendedorParam(e.target.value)}
        >
          <option selected disabled >Selecione um Vendedor</option>
          {vendedores.map(vendedor => (
            <option value={vendedor.id} key={vendedor.id}> {vendedor.name}</option>
          ))}
        </select>
        <label htmlFor="cliente">Cliente</label>
        <select
          id="cliente"
          onChange={(e) => setClienteParam(e.target.value)}
        >
          <option selected disabled >Selecione um Cliente</option>
          {clientes.map(cliente => (
            <option value={cliente.id} key={cliente.id}>{cliente.name}</option>
          ))}
        </select>
        <label htmlFor="valueVenda">Produto</label>
        <select
          id="produto"
          onChange={(e) => setProdutoParam(e.target.value)}
        >
          <option selected disabled >Selecione um Produto</option>
          {produtos.map(produto => (
            <option value={produto.price} key={produto.id}>
              {produto.name} - Valor: {produto.price.toFixed(2)}
            </option>
          ))}
        </select>
        <button onClick={() => {
          saveSell(vendedorParam, clienteParam, produtoParam);
        }}>Salvar</button>
      </div>
    );
  }
}

// Adicionando validação de tipo para as props
Adicionar.propTypes = {
  type: PropTypes.string.isRequired, // 'type' deve ser uma string e é obrigatório
};

export default Adicionar;
