"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarTarefa = criarTarefa;
exports.listarTarefas = listarTarefas;
exports.buscarPorId = buscarPorId;
exports.atualizarTarefa = atualizarTarefa;
exports.deletarTarefa = deletarTarefa;
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
function atualizarTarefa(id, title, completed) {
    const tarefa = buscarPorId(id);
    if (!tarefa) {
        return null;
    }
    if (title !== undefined) {
        tarefa.title = title;
    }
    if (completed !== undefined) {
        tarefa.completed = completed;
    }
    return tarefa;
}
function deletarTarefa(id) {
    const index = tarefas.findIndex((tarefa) => tarefa.id === Number(id));
    if (index === -1) {
        return false;
    }
    tarefas.splice(index, 1);
    return true;
}
