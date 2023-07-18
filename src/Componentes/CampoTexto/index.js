import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = () => {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [editando, setEditando] = useState(false);
  const [index, setIndex] = useState(null);
  function adicionarTarefa() {
    if (editando && index !== null) {
      const novasTarefas = [...tarefas];
      novasTarefas.splice(index, 1, texto);
      setTarefas(novasTarefas);
      setEditando(false);
      setTexto("");
    } else {
      setTarefas([...tarefas, texto]);
      setTexto("");
    }
  }

  function removerTarefa(index) {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  }

  function editarTarefa(index) {
    setEditando(true);
    setIndex(index);
    setTexto(tarefas[index]);
  }

  return (
    <section className="fundo">
      <div className="texto">
        <input
          value={texto}
          onChange={(texto) => setTexto(texto.target.value)}
          type="text"
          placeholder="Adicione uma tarefa"
        />
        <button onClick={adicionarTarefa}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <span>{editando ? "Editar" : "Criar"}</span>
        </button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <div key={index}>
            <li className="item">{tarefa}</li>
            <button onClick={() => removerTarefa(index)}>
              <span>Remover</span>
            </button>
            <button onClick={() => editarTarefa(index)}>
              <span>editar</span>
            </button>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default CampoTexto;
