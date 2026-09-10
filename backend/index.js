const express = require(`express`);
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

let tarefas = [
    { id: 1, titulo: `Estudar para a prova`, concluida: false},
    { id: 2, titulo: `Terminar o chekou`, concluida: false}
];

app.get(`/`, (req, res) => {
    res.send(`Servidor do Chekou rodando!`);
});

app.get(`/tarefas`, (req, res) => {
    res.json(tarefas);
});

app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: 'O título é obrigatório' });
  }

  const novaTarefa = {
    id: Date.now(),
    titulo: titulo,
    concluida: false
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});
app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
});