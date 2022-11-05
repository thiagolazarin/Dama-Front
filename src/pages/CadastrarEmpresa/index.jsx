//css
import "./style.css";

//icons
import { BsPersonFill, BsFillLockFill, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import DamaSection from "../../components/damaSection";

const CadastrarEmpresa = () => {
  return (
    <div className="container">

      <DamaSection/>

      <div className="container-inputs">
          <h2>Cadastre sua Empresa!</h2>

          <div className="inputs">

            <div className="inupts-text">
                <input type="text" placeholder="Nome *"/>
                <BsPersonFill className="icon"/>
            </div>

            <div className="inupts-text">
                <input type="email" placeholder="Endereço de email *"/>
                <MdEmail className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="password" placeholder="Senha *"/>
              <BsFillLockFill className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="number" placeholder="CNPJ *" />
              <HiDocumentText className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="tel" placeholder="Contato *" />
              <BsTelephoneFill className="icon"/>
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

export default CadastrarEmpresa;
