import { NavLink } from "react-router-dom";
import { projetos } from "../../data/projetos";

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
        {projetos.map((p) => (
          <NavLink className="workspace" to={p.rota} key={p.nome}>
            <i className={`workspace-dot ${p.cor}`} />
            {p.nome}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;