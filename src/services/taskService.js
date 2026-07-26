const tarefas = [];

function criarTarefa(title) {
  const novaTarefa = {
    id: Math.random(),
    title: title,
    completed: false,
  };

  tarefas.push(novaTarefa);
  return novaTarefa;
}

function listarTarefas() {
  return tarefas;
}

module.exports = {
  criarTarefa,
  listarTarefas,
};