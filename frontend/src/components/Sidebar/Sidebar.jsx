import { NavLink } from "react-router-dom";
import { projetos } from "../../data/projetos";

function Sidebar() {
  return (
    <aside nav className="nav">
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      `nav-item ${isActive ? "active" : ""}`
    }
  >
    <span>⌂</span>
    Home
  </NavLink>

      <nav className="nav">
        <NavLink
          to="/tarefas"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>✓</span>
          My Tasks
        </NavLink>

        <NavLink
          to="/projetos"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▱</span>
          Projects
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>◔</span>
          Analytics
        </NavLink>

        <NavLink
          to="/configuracoes"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>⚙</span>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;