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

function buscarPorId(req, res) {
  const { id } = req.params;
  const tarefa = taskService.buscarPorId(id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  res.status(200).json(tarefa);
}

function atualizar(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  const tarefaAtualizada = taskService.atualizarTarefa(id, title, completed);

  if (!tarefaAtualizada) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  res.status(200).json(tarefaAtualizada);
}

function deletar(req, res) {
  const { id } = req.params;
  const sucesso = taskService.deletarTarefa(id);

  if (!sucesso) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  res.status(204).send();
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  atualizar,
  deletar,
};