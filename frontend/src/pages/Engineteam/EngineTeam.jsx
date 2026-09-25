import { membrosEngine, resumoEngine } from "../../data/EquipeEngine";
import "../../global.css";

function EngineTeam() {
  return (
    <main className="main">
      <header className="header">
        <h1>👥 Engine Team</h1>
        <p>Painel da equipe de desenvolvimento e engenharia.</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <div className="stat-title">Progresso geral</div>
          <div className="stat-row">
            <strong>{resumoEngine.progresso}%</strong>
          </div>
          <div className="progress-bar-track" style={{ marginTop: 8 }}>
            <div
              className="progress-bar-fill"
              style={{ width: `${resumoEngine.progresso}%` }}
            />
          </div>
        </div>
      </section>

      <section className="activity-card">
        <div className="activity-header">
          <h2>Membros da equipe</h2>
        </div>
        <div className="activities">
          {membrosEngine.map((m) => (
            <div className="activity-row member-card" key={m.nome}>
              <span className={`member-status-dot ${m.status}`} />
              <div className="member-info">
                <div className="member-name">{m.nome}</div>
                <div className="member-role">{m.cargo}</div>
              </div>
              <span className="member-tasks-count">{m.tarefas} tarefas</span>
            </div>
          ))}
        </div>

        <div className="status-summary">
          <span>🔴 {resumoEngine.atrasadas} atrasadas</span>
          <span>🟡 {resumoEngine.emAndamento} em andamento</span>
          <span>🟢 {resumoEngine.concluidas} concluídas</span>
        </div>
      </section>
    </main>
  );
}

export default EngineTeam;