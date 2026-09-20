import "../../App.css";

const activities = [
  ["Damian Wayne", "moved Refactor database models to", "In Review", "purple", "10m ago", "DW"],
  ["Selina Kyle", "created task", "Implement Apple Pay", "green", "24m ago", "SK"],
  ["Alfred Penny", "assigned you", "Security Audit V2", "blue", "1h ago", "AP"],
  ["Bruce Wayne", "commented on", "OAuth Login bug", "red", "3h ago", "BW"],
  ["Clark Kent", "completed task", "Setup Kubernetes clusters", "green", "5h ago", "CK"],
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
        <h1>Welcome back, Marcus</h1>
        <p>Here is an overview of your workspaces and team velocity today.</p>
      </header>

      <section className="stats">
        <StatCard title="Tasks Completed" value="47" change="+12%" type="positive" />
        <StatCard title="In Progress" value="12" change="+3%" type="neutral" />
        <StatCard title="Pending Triage" value="8" change="-15%" type="negative" />
        <StatCard title="Overdue" value="3" change="+1" type="negative" />
      </section>

      <section className="activity-card">
        <div className="activity-header">
          <h2>Recent Workspace Activity</h2>
          <button>View Audit Trail →</button>
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