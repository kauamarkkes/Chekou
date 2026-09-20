import { NavLink } from "react-router-dom";

const workspaces = [
  ["Engine Team", "purple"],
  ["Design Sprint", "yellow"],
  ["V2 Launch", "blue"],
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="brand"><span>⌂</span> Home</NavLink>

      <nav className="nav">
        <NavLink className="nav-item" to="/tarefas"><span>✓</span> My Tasks</NavLink>
        <NavLink className="nav-item" to="/projetos"><span>▱</span> Projects</NavLink>
        <NavLink className="nav-item" to="/analytics"><span>◔</span> Analytics</NavLink>
        <NavLink className="nav-item" to="/configuracoes"><span>⚙</span> Settings</NavLink>
      </nav>

      <div className="workspace-section">
        <div className="section-title">MY WORKSPACES</div>
        {workspaces.map(([name, color]) => (
          <a className="workspace" href="#" key={name}>
            <i className={`workspace-dot ${color}`} />
            {name}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;