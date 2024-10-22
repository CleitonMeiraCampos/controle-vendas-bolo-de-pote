import imgClientes from '../../assets/users-avatar.png';
import ClientePage from '../Clientes/index.jsx';
import './home.css';

function Home() {

    function actualPage(){
        let clientButton = true;
        let sellButton = false;

        if(clientButton == true){
            console.log("pagina de clientes")
        }else if(sellButton == true){
           console.log("pagina de vendas") 
        }
    }

    actualPage();//i know that isn´t right
    
    
    return(
        <div className='container-main-home'>
            <div>
                <section className='container-home'>
                    <aside>
                        <div className='container-text-header'>
                            <h2>Controle de Vendas</h2>
                        </div>
                        <div className='container-img-pages'>
                            <div className="img-pages">
                                <img src={imgClientes} alt="Clientes"/>
                                <span >Consultar Clientes</span>
                            </div>
                            <div className="img-pages">
                                <img src={imgClientes} alt="Vendas"/>
                                <span>Consultar Vendas</span>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
            <ClientePage></ClientePage>
        </div>
)}

export default Home;
