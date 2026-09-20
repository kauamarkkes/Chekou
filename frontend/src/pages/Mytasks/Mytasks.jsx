import { useState, useEffect } from "react";
import "../../App.css";

function MyTasks() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tarefas")
      .then((res) => res.json())
      .then(setTarefas);
  }, []);

  return (
    <main className="main">
      <header className="header">
        <h1>My Tasks</h1>
      </header>

      <section className="activity-card">
        <div className="activities">
          {tarefas.map((t) => (
            <div className="activity-row" key={t.id}>
              <span>{t.titulo}</span>
              <em className={`tag ${t.concluida ? "green" : "purple"}`}>
                {t.concluida ? "Concluída" : "Pendente"}
              </em>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MyTasks;