//css
import "./style.css";

//icons
import { BsPersonFill, BsFillLockFill, BsTelephoneFill, BsSearch } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import DamaSection from "../../components/damaSection";

const FazerLogin = () => {
  return (
    <div className="container">

      <DamaSection/>

      <div className="container-inputs">
      
          <h2>Entrar na conta!
          <p>Você está na plataforma de pesquisador</p>
          </h2>

          <div className="inputs">

            <div className="inupts-text">
                <input type="email" placeholder="Endereço de email *"/>
                <MdEmail className="icon"/>
            </div>

            <div className="inupts-text">
              <input type="password" placeholder="Senha *"/>
              <BsFillLockFill className="icon"/>
            </div>

            <div className="buttons">
                <button className="btnCriarConta">Entrar</button>
                <button className="btnEntrar">Criar Conta</button>
            </div>
            
            <div className="esqueceuSenha">
                <BsSearch/>
                <a href="">Esqueceu a senha?</a>
            </div>

          </div>
      </div>
    </div>
  );
};

export default FazerLogin;
