import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export function criar(req: Request, res: Response): void {
  const { title } = req.body;
  const novaTarefa = taskService.criarTarefa(title);
  res.status(201).json(novaTarefa);
}

export function listar(req: Request, res: Response): void {
  const tarefas = taskService.listarTarefas();
  res.status(200).json(tarefas);
}

export function buscarPorId(req: Request<{ id: string }>, res: Response): void {
  const { id } = req.params;
  const tarefa = taskService.buscarPorId(id);

  if (!tarefa) {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    return;
  }

  res.status(200).json(tarefa);
}

export function atualizar(req: Request<{ id: string }>, res: Response): void {
  const { id } = req.params;
  const { title, completed } = req.body;

  const tarefaAtualizada = taskService.atualizarTarefa(id, title, completed);

  if (!tarefaAtualizada) {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    return;
  }

  res.status(200).json(tarefaAtualizada);
}

export function deletar(req: Request<{ id: string }>, res: Response): void {
  const { id } = req.params;
  const sucesso = taskService.deletarTarefa(id);

  if (!sucesso) {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    return;
  }

  res.status(204).send();
}