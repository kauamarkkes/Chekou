import "../../global.css";

const metricas = [
  { titulo: "Tasks Completed", valor: 47, variacao: "+12%", tipo: "positive" },
  { titulo: "In Progress", valor: 12, variacao: "+3%", tipo: "neutral" },
  { titulo: "Pending Triage", valor: 8, variacao: "-16%", tipo: "negative" },
  { titulo: "Overdue", valor: 3, variacao: "+1", tipo: "negative" },
];

const semana = [
  { dia: "Seg", valor: 40 },
  { dia: "Ter", valor: 65 },
  { dia: "Qua", valor: 50 },
  { dia: "Qui", valor: 90 },
  { dia: "Sex", valor: 75 },
  { dia: "Sáb", valor: 20 },
  { dia: "Dom", valor: 10 },
];

function Analytics() {
  const maiorValor = Math.max(...semana.map((d) => d.valor));

  return (
    <main className="main">
      <header className="header">
        <h1>Analytics</h1>
        <p>Visão geral da produtividade da equipe.</p>
      </header>

      <section className="stats">
        {metricas.map((m) => (
          <div className="stat-card" key={m.titulo}>
            <div className="stat-title">{m.titulo}</div>
            <div className="stat-row">
              <strong>{m.valor}</strong>
              <span className={`change ${m.tipo}`}>
                {m.tipo === "negative" ? "↘" : "↗"} {m.variacao}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="activity-card chart-card">
        <div className="activity-header">
          <h2>Tarefas concluídas na semana</h2>
        </div>
        <div className="bar-chart">
          {semana.map((d) => (
            <div className="bar-column" key={d.dia}>
              <div
                className="bar-fill"
                style={{ height: `${(d.valor / maiorValor) * 100}%` }}
              />
              <span className="bar-label">{d.dia}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Analytics;