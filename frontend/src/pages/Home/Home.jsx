import "../../global.css";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarTarefas() {
      try {
        const response = await fetch("http://localhost:3000/tarefas");

        if (!response.ok) {
          throw new Error("Erro ao carregar tarefas");
        }

        const data = await response.json();
        setTarefas(data);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarTarefas();
  }, []);

  const totalTarefas = tarefas.length;

  const tarefasConcluidas = tarefas.filter(
    (tarefa) => tarefa.concluida === true
  ).length;

  const tarefasPendentes = tarefas.filter(
    (tarefa) => tarefa.concluida !== true
  ).length;

  const progresso =
    totalTarefas > 0
      ? Math.round((tarefasConcluidas / totalTarefas) * 100)
      : 0;

  return (
    <main className="main">
      <PageHeader
        title="Dashboard"
        description="Acompanhe o andamento das suas tarefas e projetos."
      />

      {loading ? (
        <p>Carregando informações...</p>
      ) : (
        <section className="stats">
          <div className="stat-card">
            <p className="stat-title">Total de tarefas</p>

            <div className="stat-row">
              <strong>{totalTarefas}</strong>
            </div>
          </div>

          <div className="stat-card">
            <p className="stat-title">Concluídas</p>

            <div className="stat-row">
              <strong>{tarefasConcluidas}</strong>
            </div>
          </div>

          <div className="stat-card">
            <p className="stat-title">Pendentes</p>

            <div className="stat-row">
              <strong>{tarefasPendentes}</strong>
            </div>
          </div>

          <div className="stat-card">
            <p className="stat-title">Progresso</p>

            <div className="stat-row">
              <strong>{progresso}%</strong>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Home;