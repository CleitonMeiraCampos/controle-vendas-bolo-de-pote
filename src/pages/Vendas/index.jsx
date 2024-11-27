import './vendas.css';
import { useState, useEffect } from 'react';

function Venda() {
  // Declarando o estado para armazenar os dados
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para mostrar carregamento

  // Usando useEffect para fazer a requisição quando o componente for montado
  useEffect(() => {
    
    fetch('http://localhost:8080/sell')
      .then(res => res.json())  // Convertendo a resposta para JSON
      .then(data => {
        setData(data);  // Armazenando os dados no estado
        setLoading(false); // Atualizando o estado de carregamento
      })

  }, []); 

  if (loading) {
    return <div>Carregando...</div>;
  }

  // Verificando se há dados e renderizando
  if (data) {
    return (
        <div className='container-venda'>
            {
                data.map(item => (
                    <div key={item.id} className='venda'>
                        <p><strong>ID da venda:</strong> {item.id}</p>
                        <p><strong>Vendedor:</strong> {item.vendedor.name}</p>
                        <p><strong>Cliente:</strong> {item.cliente.name}</p>
                        <p><strong>Data:</strong> {item.data}</p>
                        <p><strong>Valor da venda:</strong> {item.valorVenda}</p>    
                    </div>
                ))
            }
        </div>
    );
  }
}

export default Venda;
