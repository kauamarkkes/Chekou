import "../../App.css";

const projetos = [
  { nome: "Engine Team", cor: "purple", tarefas: 12, concluidas: 8 },
  { nome: "Design Sprint", cor: "yellow", tarefas: 6, concluidas: 2 },
  { nome: "V2 Launch", cor: "blue", tarefas: 20, concluidas: 15 },
];

function Projects() {
  return (
    <main className="main">
      <header className="header">
        <h1>Projects</h1>
        <p>Acompanhe o progresso dos seus workspaces.</p>
      </header>

      <section className="projects-grid">
        {projetos.map((p) => {
          const progresso = Math.round((p.concluidas / p.tarefas) * 100);
          return (
            <div className="project-card" key={p.nome}>
              <div className="project-card-header">
                <span className={`project-dot ${p.cor}`} />
                <span className="project-name">{p.nome}</span>
              </div>
              <div className="project-meta">
                {p.tarefas} tarefas · {p.concluidas} concluídas
              </div>
              <div className="progress-bar-track">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progresso}%` }}
                />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Projects;