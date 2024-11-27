import { useEffect, useState } from "react";
import { Tarefa } from "../../models/Tarefa";
import styles from "./TarefaLista.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function TarefaLista() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    fetch("http://localhost:5020/api/tarefa/listar")
      .then((resposta) => {
        return resposta.json();
      })
      .then((tarefas) => {
        setTarefas(tarefas);
      });
  });

  function deletar(id: string) {
    axios
      .delete(`http://localhost:5020/api/tarefas/deletar/${id}`)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Criado Em</th>
            <th>Deletar</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.categoria?.titulo}</td>
              <td>{tarefa.criadoEm}</td>
              <td>
                <button onClick={() => deletar(tarefa.tarefaId!)}>
                  Deletar
                </button>
              </td>
              <td>
                <Link to={`/pages/tarefa/alterar/${tarefa.tarefaId}`}>
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefaLista;
