import FormularioPostagem from "../formularioPostagem/FormularioPostagem";

import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

import "./ModalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="border-2 border-Primary  border-dashed rounded bg-Secundary text-Primary py-2 px-4 transition duration-300 ease-in-out transform hover:bg-Primary hover:text-Secundary hover:border-Secundary">
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
