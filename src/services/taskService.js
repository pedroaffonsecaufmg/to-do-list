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

function buscarPorId(id) {
  const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === Number(id));
  return tarefaEncontrada;
}

module.exports = {
  criarTarefa,
  listarTarefas,
};