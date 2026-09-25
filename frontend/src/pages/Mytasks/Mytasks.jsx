import { useState, useEffect } from "react";
import "../../global.css";

function MyTasks() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    fetch("http://localhost:3000/tarefas")
      .then((res) => res.json())
      .then(setTarefas);
  }, []);

  function alternarConclusao(id) {
  fetch(`http://localhost:3000/tarefas/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((tarefaAtualizada) => {
      setTarefas((atuais) =>
        atuais.map((t) => (t.id === id ? tarefaAtualizada : t))
      );
    });
}

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "pendentes") return !t.concluida;
    if (filtro === "concluidas") return t.concluida;
    return true;
  });

  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <main className="main">
      <header className="header">
        <h1>My Tasks</h1>
        <p>Acompanhe e gerencie suas tarefas.</p>
      </header>

      <section className="activity-card">
        <div className="tasks-toolbar">
          <div className="tasks-filter">
            <button
              className={`filter-btn ${filtro === "todas" ? "active" : ""}`}
              onClick={() => setFiltro("todas")}
            >
              Todas
            </button>
            <button
              className={`filter-btn ${filtro === "pendentes" ? "active" : ""}`}
              onClick={() => setFiltro("pendentes")}
            >
              Pendentes
            </button>
            <button
              className={`filter-btn ${filtro === "concluidas" ? "active" : ""}`}
              onClick={() => setFiltro("concluidas")}
            >
              Concluídas
            </button>
          </div>
          <span className="tasks-counter">
            {concluidas} de {tarefas.length} concluídas
          </span>
        </div>

        <div className="activities">
          {tarefasFiltradas.map((t) => (
            <div className="activity-row task-item" key={t.id}>
              <button
                className={`task-checkbox ${t.concluida ? "checked" : ""}`}
                onClick={() => alternarConclusao(t.id)}
              />
              <span className={`task-title ${t.concluida ? "done" : ""}`}>
                {t.titulo}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MyTasks;