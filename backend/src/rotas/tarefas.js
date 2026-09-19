//by joao and bruno
//rota de tarefas

const express = require(`express`); //lib express
const rotaTaref = express.Router(); //rota de tarefas

let tarefas = [
    { id: 1, titulo: `Estudar para a prova`, concluida: false},
    { id: 2, titulo: `Terminar o chekou`, concluida: false}
]; //array de objetos de tarefas

rotaTaref.get(`/`, (req, res) => {
    res.json(tarefas);
}); //retorna o array de objetos

rotaTaref.post('/', (req, res) => {
  const { titulo } = req.body; //rdtorna os titulos no corpo do site

  if (!titulo) {
    return res.status(400).json({ erro: 'O título é obrigatório' });
  } //se não tiver o tituoo retorna o erro

  const novaTarefa = {
    id: Date.now(),
    titulo: titulo,
    concluida: false
  }; // objetos da criação de uma.nova tarefa

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
}); //adiciona a nova tarefa no array

module.exports = rotaTaref; //exporta rotaTaref
