import { useState, useEffect } from "react";
import { checklistV2, bugsV2, dataPrevistaV2 } from "../../data/v2Launch";
import "../../global.css";

function V2Launch() {
  const [checklist, setChecklist] = useState(() => {
    const salvo = localStorage.getItem("checklistV2");
    return salvo ? JSON.parse(salvo) : checklistV2;
  });

  useEffect(() => {
    localStorage.setItem("checklistV2", JSON.stringify(checklist));
  }, [checklist]);

  function alternarItem(item) {
    setChecklist((atual) =>
      atual.map((i) =>
        i.item === item ? { ...i, concluido: !i.concluido } : i
      )
    );
  }

  const concluidos = checklist.filter((i) => i.concluido).length;
  const progresso = Math.round((concluidos / checklist.length) * 100);

  return (
    <main className="main">
      <header className="header">
        <h1>🚀 V2 Launch</h1>
        <p>Acompanhamento do lançamento da versão 2.</p>
        <div className="launch-date">Data prevista: {dataPrevistaV2}</div>
      </header>

      <section className="stats">
        <div className="stat-card">
          <div className="stat-title">Progresso do lançamento</div>
          <div className="stat-row">
            <strong>{progresso}%</strong>
          </div>
          <div className="progress-bar-track" style={{ marginTop: 8 }}>
            <div className="progress-bar-fill" style={{ width: `${progresso}%` }} />
          </div>
        </div>
      </section>

      <section className="activity-card">
        <div className="activity-header">
          <h2>Checklist de lançamento</h2>
        </div>
        <div className="activities">
          {checklist.map((i) => (
            <div
              className="checklist-item"
              key={i.item}
              onClick={() => alternarItem(i.item)}
            >
              <span className={`checklist-check ${i.concluido ? "done" : ""}`} />
              <span className={i.concluido ? "done-text" : ""}>{i.item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="activity-card" style={{ marginTop: 16 }}>
        <div className="activity-header">
          <h2>Bugs encontrados</h2>
        </div>
        <div className="activities">
          {bugsV2.map((b) => (
            <div className="bug-row" key={b.titulo}>
              <span>{b.titulo}</span>
              <span className={`priority-tag ${b.prioridade}`}>{b.prioridade}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default V2Launch;