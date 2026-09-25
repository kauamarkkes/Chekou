import "../../global.css";

const activities = [
  ["Damian Wayne", "Modelos de banco de dados refatorados movidos para", "Em Análise", "purple", "10m atrás", "DW"],
  ["Selina Kyle", "tarefa criada", "Implementar o Apple Pay", "green", "24m atrás", "SK"],
  ["Alfred Penny", "designou você", "Auditoria de Segurança V2", "blue", "1h atrás", "AP"],
  ["Bruce Wayne", "comentou sobre", "Erro no login via OAuth", "red", "3h atrás", "BW"],
  ["Clark Kent", "tarefa concluída", "Configurar clusters Kubernetes", "green", "5h atrás", "CK"],
];

function StatCard({ title, value, change, type }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-row">
        <strong>{value}</strong>
        <span className={`change ${type}`}>{type === "negative" ? "↘" : "↗"} {change}</span>
      </div>
    </div>
  );
}

function Activity({ item, index }) {
  const [name, action, tag, color, time, initials] = item;
  return (
    <div className="activity-row">
      <div className={`avatar avatar-${index}`}>{initials}</div>
      <div className="activity-text">
        <b>{name}</b>
        <span>{action}</span>
        <em className={`tag ${color}`}>{tag}</em>
      </div>
      <time>{time}</time>
    </div>
  );
}

function Home() {
  return (
    <main className="main">
      <header className="header">
        <h1>Bem vindo de volta, Marcus</h1>
        <p>Aqui está uma visão geral dos seus espaços de trabalho e da velocidade da equipe hoje.</p>
      </header>

      <section className="stats">
        <StatCard title="Tasks Completas" value="47" change="+12%" type="positive" />
        <StatCard title="Em Progresso" value="12" change="+3%" type="neutral" />
        <StatCard title="aguardando triagem" value="8" change="-15%" type="negative" />
        <StatCard title="atrasadas" value="3" change="+1" type="negative" />
      </section>

      <section className="activity-card">
        <div className="activity-header">
          <h2>Atividade recente no espaço de trabalho</h2>
          <button>Visualizar trilha de auditoria →</button>
        </div>
        <div className="activities">
          {activities.map((item, index) => (
            <Activity key={item[0]} item={item} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;