import { itensDesignSprint, colunasDesignSprint } from "../../data/designSprint";
import "../../global.css";

function DesignSprint() {
  return (
    <main className="main">
      <header className="header">
        <h1>🎨 Design Sprint</h1>
        <p>Processo de criação e validação do design.</p>
      </header>

      <div className="kanban-board">
        {colunasDesignSprint.map((coluna) => (
          <div className="kanban-column" key={coluna}>
            <div className="kanban-column-title">{coluna}</div>
            {itensDesignSprint
              .filter((item) => item.status === coluna)
              .map((item) => (
                <div className="kanban-card" key={item.titulo}>
                  {item.titulo}
                  <div className="kanban-card-tipo">{item.tipo}</div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default DesignSprint;