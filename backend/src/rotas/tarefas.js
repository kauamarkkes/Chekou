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
  const { titulo } = req.body; //retorna os titulos no corpo do site

  if (!titulo) {
    return res.status(400).json({ erro: 'O título é obrigatório' });
  } //se não tiver o titulo retorna o erro

  const novaTarefa = {
    id: Date.now(),
    titulo: titulo,
    concluida: false
  }; // objetos da criação de uma nova tarefa

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
}); //adiciona a nova tarefa no array

rotaTaref.put('/:id', (req, res) => {
  const id = Number(req.params.id); //pega o id que veio na url e transforma em numero

  const tarefa = tarefas.find((t) => t.id === id); //procura a tarefa com esse id no array

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  } //se não achar a tarefa retorna o erro

  tarefa.concluida = !tarefa.concluida; //inverte o valor de concluida (true vira false e vice versa)

  res.json(tarefa);
}); //atualiza o status de concluida da tarefa

rotaTaref.delete('/:id', (req, res) => {
  const id = Number(req.params.id); //pega o id que veio na url e transforma em numero

  const existe = tarefas.some((t) => t.id === id); //verifica se a tarefa existe no array

  if (!existe) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  } //se não existir retorna o erro

  tarefas = tarefas.filter((t) => t.id !== id); //cria um novo array sem a tarefa removida

  res.status(204).send();
}); //remove a tarefa do array

module.exports = rotaTaref; //exporta rotaTaref