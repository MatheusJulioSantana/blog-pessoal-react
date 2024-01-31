import FormularioPostagem from "../formularioPostagem/FormularioPostagem";

import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

// import "./ModalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 hover:bg-white hover:text-indigo-800">
            Nova postagem
          </button>
        }
        modal
      >
        <div>
          {/* Conteúdo do Modal, no caso o Formulario de Postagem */}
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;
