const express = require("express");
const fs = require("fs");
const path = require("path");

const rotaTaref = express.Router();
const ARQUIVO = path.join(__dirname, "tarefas.json");

let tarefas = [];

try {
  if (fs.existsSync(ARQUIVO)) {
    tarefas = JSON.parse(fs.readFileSync(ARQUIVO, "utf8"));
  } else {
    tarefas = [
      { id: 1, titulo: "Estudar para a prova", concluida: false },
      { id: 2, titulo: "Terminar o chekou", concluida: false }
    ];
    fs.writeFileSync(ARQUIVO, JSON.stringify(tarefas, null, 2));
  }
} catch (e) {
  tarefas = [
    { id: 1, titulo: "Estudar para a prova", concluida: false },
    { id: 2, titulo: "Terminar o chekou", concluida: false }
  ];
}

function salvar() {
  fs.writeFileSync(ARQUIVO, JSON.stringify(tarefas, null, 2));
}

rotaTaref.get("/", (req, res) => {
  res.json(tarefas);
});

rotaTaref.post("/", (req, res) => {
  const { titulo } = req.body;
  if (!titulo || !titulo.trim()) {
    return res.status(400).json({ erro: "O título é obrigatório" });
  }
  const novaTarefa = { id: Date.now(), titulo: titulo.trim(), concluida: false };
  tarefas.push(novaTarefa);
  salvar();
  res.status(201).json(novaTarefa);
});

rotaTaref.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) return res.status(404).json({ erro: "Tarefa não encontrada" });
  tarefa.concluida = !tarefa.concluida;
  salvar();
  res.json(tarefa);
});

rotaTaref.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { titulo } = req.body;
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) return res.status(404).json({ erro: "Tarefa não encontrada" });
  if (!titulo || !titulo.trim()) return res.status(400).json({ erro: "O título é obrigatório" });
  tarefa.titulo = titulo.trim();
  salvar();
  res.json(tarefa);
});

rotaTaref.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!tarefas.some((t) => t.id === id)) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }
  tarefas = tarefas.filter((t) => t.id !== id);
  salvar();
  res.status(204).send();
});

module.exports = rotaTaref;
