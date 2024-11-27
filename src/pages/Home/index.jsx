import { useState } from 'react';
import imgClientes from '../../assets/users-avatar.png';
import ClientePage from '../Clientes/index.jsx';
import Venda from '../Vendas/index.jsx';
import './home.css';

function Home() {
  // Usando o useState com um índice ou string para definir a página ativa
  const [currentPage, setCurrentPage] = useState('clientes'); // 'clientes' ou 'vendas'

  // Função para alterar a página
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container-main-home'>
      <section className='container-home'>
        <aside>
          <div className='container-text-header'>
            <h2>Controle de Vendas</h2>
          </div>
          <div className='container-img-pages'>
            <div className="img-pages">
              <img src={imgClientes} alt="Clientes" />
              <span onClick={() => changePage('clientes')}>Clientes</span>
            </div>
            <div className="img-pages">
              <img src={imgClientes} alt="Vendas" />
              <span onClick={() => changePage('vendas')}>Vendas</span>
            </div>
            {/* Adicione mais opções aqui no futuro, como "Relatórios", "Configurações", etc */}
          </div>
        </aside>
      </section>
      { currentPage === 'clientes' ? <ClientePage /> : currentPage === 'vendas' ? <Venda /> : null}
    </div>
  );
}

export default Home;
