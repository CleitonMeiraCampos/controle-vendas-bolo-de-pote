import { useState } from 'react';
import imgClientes from '../../assets/users-avatar.png';
import ClientePage from '../Clientes/index.jsx';
import Adicionar from '../../components/adicionar/'
import Venda from '../Vendas/index.jsx';
import seta from '../../assets/down-arrow.png'
import './home.css';
import Alterar from '../../components/alterar/index.jsx';

function Home() {
  // Usando o useState com um índice ou string para definir a página ativa
  const [currentPage, setCurrentPage] = useState('clientes');
  const [typePage, setTypePage] = useState('');
  const [isSubCategoryVisibleClientes, setIsSubCategoryVisibleClientes] = useState(false)
  const [IsSubCategoryVisibleVendas, setIsSubCategoryVisibleVendas] = useState(false)
  const [typePageAlterar, setTypePageAlterar] = useState('')
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
              <span onClick={()=>{setIsSubCategoryVisibleClientes(!isSubCategoryVisibleClientes)}}>Clientes {!isSubCategoryVisibleClientes ? (<img className='seta-show' src={seta}/>): (<img className='seta-noshow' src={seta}/>)}</span>
              </div>
              {isSubCategoryVisibleClientes ? (
                <ul className='sub-category-page'>
                <li onClick={() => changePage('clientes')}>Listar Clientes</li>
                <li onClick={() => {setTypePage('cliente');changePage('adicionar');}}>Novo Cliente</li>
                <li onClick={()=>{setTypePageAlterar('cliente'); setCurrentPage('alterar')}} >Alterar Cliente</li>
                <li>Remover Cliente</li>
              </ul>
              ): null}
            </div>
            <div className="option-pages">
              <div className='category-page'>
                <img src={imgClientes} alt="Vendas" />
                <span onClick={()=>{setIsSubCategoryVisibleVendas(!IsSubCategoryVisibleVendas)}}>Vendas {!IsSubCategoryVisibleVendas ? (<img className='seta-show' src={seta}/>) : (<img className='seta-noshow' src={seta}/>)}</span>
              </div>
              {IsSubCategoryVisibleVendas ? (
                <ul className='sub-category-page'>
                <li onClick={() => changePage('vendas')}>Listar Vendas</li>
                <li onClick={() => {setTypePage('venda');changePage('adicionar');}}>Adicionar Vendas</li>
                <li onClick={()=>{setTypePageAlterar('vendas'); setCurrentPage('alterar')}}>Alterar Vendas</li>
                <li>Remove Vendas</li>
              </ul>
              ): null}
            </div>
            {/* Adicione mais opções aqui no futuro, como "Relatórios", "Configurações", etc */}
          </div>
        </aside>
      </section>
      { currentPage === 'clientes' ? <ClientePage /> : currentPage === 'vendas' ? <Venda /> : currentPage === 'adicionar'? <Adicionar type={typePage}/> : currentPage === 'alterar' ? <Alterar type={typePageAlterar} /> : null}
    </div>
  );
}

export default Home;
