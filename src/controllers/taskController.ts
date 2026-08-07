import { Request, Response } from 'express';
import * as taskService from '../services/taskService.js';

export async function criar(req: Request, res: Response): Promise<void> {
  try {
  const { title } = req.body;
  const novaTarefa = await taskService.criarTarefa(title);
  res.status(201).json(novaTarefa);
 } catch (error) {
  res.status(400).json({ mensagem: 'Erro ao criar tarefa' });
 }
}

export async function listar(req: Request, res: Response): Promise<void> {
  const tarefas = await taskService.getAll();
  res.status(200).json(tarefas);
}

export async function buscarPorId(req: Request<{ id: string }>, res: Response): Promise<void> {
  const { id } = req.params;
  const tarefa = await taskService.getById(id);

  if (!tarefa) {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    return;
  }

  res.status(200).json(tarefa);
}

export async function atualizar(req: Request<{ id: string }>, res: Response): Promise<void> {
  const { id } = req.params;
  const { title, completed } = req.body;

  const tarefaAtualizada = await taskService.atualizarTarefa(id, title, completed);

  if (!tarefaAtualizada) {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    return;
  }

  res.status(200).json(tarefaAtualizada);
}

export async function deletar(req: Request<{ id: string }>, res: Response): Promise<void> {
  const { id } = req.params;
  const sucesso = await taskService.deletarTarefa(id);

  if (!sucesso) {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    return;
  }

  res.status(204).send();
}