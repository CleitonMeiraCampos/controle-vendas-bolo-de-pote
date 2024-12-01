import PropTypes from 'prop-types';
import './adicionar.css';

function Adicionar(props) {
  var type = props.type;  // A propriedade 'type' (minúscula) do props

  if (type === 'cliente') {
    return (
      <div className="container-adicionar-cliente">
        <label htmlFor="nome-cliente">Nome do Cliente:</label>
        <input type="text" className="nome-cliente"/>
        <label htmlFor="valueToPay">Valor a Pagar:</label>
        <input type="text" className="valueToPay"/>
        <button>Salvar</button>
      </div>
    );
  } else if (type === 'venda') {
    return (
      <div className="container-adicionar">
        <label htmlFor="vendedor">Nome do Vendedor</label>
        <input type="text" className="vendedor" id="vendedor" />
        <label htmlFor="cliente">Nome do Cliente</label>
        <input type="text" className="cliente" id="cliente" />
        <label htmlFor="valueVenda">Valor da Venda</label>
        <input type="text" className="valueVenda" id="valueVenda" />
        <button>Salvar</button>
      </div>
    );
  } else {
    return (
      <div>Tipo não encontrado</div>
    );
  }
}

// Adicionando validação de tipo para as props
Adicionar.propTypes = {
  type: PropTypes.string.isRequired, // 'type' deve ser uma string e é obrigatório
};

export default Adicionar;
