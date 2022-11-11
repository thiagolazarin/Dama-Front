//css
import "./style.css";

//icons
import { BsPersonFill, BsFillLockFill, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import DamaSection from "../../components/damaSection";

const CadastrarPesquisador = () => {
  return (
    <div className="container">

      <DamaSection/>

      <div className="container-inputs">
      
          <h2>Cadastre-se!
          <p>Você está se candidatando como pesquisador</p>
          </h2>

          <div className="inputs">

            <div className="inupts-text">
                <input type="text" placeholder="Nome do pesquisador *" required/>
                <BsPersonFill className="icon"/>
            </div>

            <div className="inupts-text">
                <input type="email" placeholder="Email do pesquisador *" required/>
                <MdEmail className="icon"/>
            </div>

            <div className="inupts-text">
                <input type="text" placeholder="Cargo do pesquisador"/>
                <MdEmail className="icon"/>
            </div>

            <div className="inupts-text">
                <input type="text" placeholder="Organização do pesquisador"/>
                <MdEmail className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="number" placeholder="CPF do pesquisador*" />
              <HiDocumentText className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="tel" placeholder="Contato do pesquisador" />
              <BsTelephoneFill className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="password" placeholder="Senha *" required/>
              <BsFillLockFill className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="password" placeholder="Confirmar senha *" required/>
              <BsFillLockFill className="icon"/>
            </div>

            <div className="buttons">
                <button className="btnCriarConta">Criar Conta</button>
                <button className="btnEntrar">Entrar</button>
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default CadastrarPesquisador;
