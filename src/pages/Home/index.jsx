import { useState } from 'react';
import imgClientes from '../../assets/users-avatar.png';
import ClientePage from '../Clientes/index.jsx';
import Adicionar from '../../components/adicionar/'
import Venda from '../Vendas/index.jsx';
import './home.css';

function Home() {
  // Usando o useState com um índice ou string para definir a página ativa
  const [currentPage, setCurrentPage] = useState('clientes');
  const [typePage, setTypePage] = useState('');
  const [isSubCategoryVisible, setIsSubCategoryVisible] = useState(false)

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
          <div className='container-option-pages'>
            <div className="option-pages">
              <div className='category-page'>
              <img src={imgClientes} alt="Clientes" />
              <span onClick={()=>{setIsSubCategoryVisible(!isSubCategoryVisible)}}>Clientes</span>
              </div>
              {isSubCategoryVisible ? (
                <ul className='sub-category-page'>
                <li onClick={() => changePage('clientes')}>Listar Clientes</li>
                <li onClick={() => {setTypePage('cliente');changePage('adicionar');}}>Novo Cliente</li>
                <li>Alterar Cliente</li>
                <li>Remover Cliente</li>
              </ul>
              ): null}
            </div>
            <div className="option-pages">
              <div className='category-page'>
                <img src={imgClientes} alt="Vendas" />
                <span>Vendas</span>
              </div>
              <ul className='sub-category-page'>
                <li onClick={() => changePage('vendas')}>Listar Vendas</li>
                <li onClick={() => {setTypePage('venda');changePage('adicionar');}}>Adicionar Vendas</li>
                <li>Alterar Vendas</li>
                <li>Remove Vendas</li>
              </ul>
            </div>
            {/* Adicione mais opções aqui no futuro, como "Relatórios", "Configurações", etc */}
          </div>
        </aside>
      </section>
      { currentPage === 'clientes' ? <ClientePage /> : currentPage === 'vendas' ? <Venda /> : currentPage === 'adicionar'? <Adicionar type={typePage}/> : null}
    </div>
  );
}

export default Home;
