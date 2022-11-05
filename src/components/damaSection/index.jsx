import "./style.css";

import logoDama from "../../images/dama.svg"

const DamaSection = () => {
  return (
    <div className="container-dama">
      <img src={logoDama} alt="logo-dama" id="logoDama" />
      <h1 id="title">Projeto Dashboard de monitoramento Ambiental</h1>
    </div>
  );
};

export default DamaSection;
