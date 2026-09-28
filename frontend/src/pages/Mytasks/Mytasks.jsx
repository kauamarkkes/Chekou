import { useState, useEffect } from "react";
import "../../global.css";

function MyTasks() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [novoTitulo, setNovoTitulo] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [tituloEditado, setTituloEditado] = useState("");

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

  function adicionarTarefa(e) {
    e.preventDefault();

    const titulo = novoTitulo.trim();
    if (!titulo) return;

    fetch("http://localhost:3000/tarefas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo }),
    })
      .then((res) => res.json())
      .then((tarefaCriada) => {
        setTarefas((atuais) => [...atuais, tarefaCriada]);
        setNovoTitulo("");
      });
  }

function iniciarEdicao(tarefa) {
  setEditandoId(tarefa.id);
  setTituloEditado(tarefa.titulo);
}

function cancelarEdicao() {
  setEditandoId(null);
  setTituloEditado("");
}

function salvarEdicao(id) {
  const titulo = tituloEditado.trim();
  if (!titulo) return;

  fetch(`http://localhost:3000/tarefas/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo }),
  })
    .then((res) => res.json())
    .then((tarefaAtualizada) => {
      setTarefas((atuais) =>
        atuais.map((t) => (t.id === id ? tarefaAtualizada : t))
      );
      cancelarEdicao();
    });
}

function excluirTarefa(id) {
  fetch(`http://localhost:3000/tarefas/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      setTarefas((atuais) => atuais.filter((t) => t.id !== id));
    }
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
        <form className="task-add-form" onSubmit={adicionarTarefa}>
          <input
            type="text"
            className="task-add-input"
            placeholder="Nova tarefa..."
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
          />
          <button type="submit" className="task-add-btn">
            Adicionar
          </button>
        </form>

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

              {editandoId === t.id ? (
                <>
                  <input
                    type="text"
                    className="task-edit-input"
                    value={tituloEditado}
                    autoFocus
                    onChange={(e) => setTituloEditado(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") salvarEdicao(t.id);
                      if (e.key === "Escape") cancelarEdicao();
                    }}
                  />
                  <button
                    className="task-action-btn save"
                    onClick={() => salvarEdicao(t.id)}
                  >
                    Salvar
                  </button>
                  <button
                    className="task-action-btn cancel"
                    onClick={cancelarEdicao}
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <span className={`task-title ${t.concluida ? "done" : ""}`}>
                    {t.titulo}
                  </span>
                  <button
                    className="task-action-btn edit"
                    onClick={() => iniciarEdicao(t)}
                  >
                    Editar
                  </button>
                 
                  <button
                    className="task-action-btn delete"
                    onClick={() => excluirTarefa(t.id)}
                  >
                    Excluir
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MyTasks;