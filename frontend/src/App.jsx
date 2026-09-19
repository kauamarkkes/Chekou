import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/tarefas')
      .then(resposta => resposta.json())
      .then(dados => setTarefas(dados));
  }, []);

  function adicionarTarefa() {
    if (!novoTitulo.trim()) return;

    fetch('http://localhost:3000/tarefas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo: novoTitulo })
    })
      .then(resposta => resposta.json())
      .then(tarefaCriada => {
        setTarefas([...tarefas, tarefaCriada]);
        setNovoTitulo('');
      });
  }

  return (
    <div>
      <h1>Minhas Tarefas</h1>

      <input
        type="text"
        value={novoTitulo}
        onChange={e => setNovoTitulo(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;