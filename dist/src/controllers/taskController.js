"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.criar = criar;
exports.listar = listar;
exports.buscarPorId = buscarPorId;
exports.atualizar = atualizar;
exports.deletar = deletar;
const taskService = __importStar(require("../services/taskService"));
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
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        return;
    }
    res.status(200).json(tarefa);
}
function atualizar(req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;
    const tarefaAtualizada = taskService.atualizarTarefa(id, title, completed);
    if (!tarefaAtualizada) {
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        return;
    }
    res.status(200).json(tarefaAtualizada);
}
function deletar(req, res) {
    const { id } = req.params;
    const sucesso = taskService.deletarTarefa(id);
    if (!sucesso) {
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        return;
    }
    res.status(204).send();
}
