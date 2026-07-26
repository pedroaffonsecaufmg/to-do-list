const taskService = require('../services/taskService');

function criar(req, res) {
  const { title } = req.body;

  const novaTarefa = taskService.criarTarefa(title);

  res.status(201).json(novaTarefa);
}

function listar(req, res) {
  const tarefas = taskService.listarTarefas();

  res.status(200).json(tarefas);
}

module.exports = {
  criar,
  listar,
};