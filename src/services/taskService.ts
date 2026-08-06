export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tarefas: Task[] = [];

export function criarTarefa(title: string): Task {
  const novaTarefa: Task = {
    id: Math.random(),
    title: title,
    completed: false,
  };

  tarefas.push(novaTarefa);
  return novaTarefa;
}

export function listarTarefas(): Task[] {
  return tarefas;
}

export function buscarPorId(id: string | number): Task | undefined {
  const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === Number(id));
  return tarefaEncontrada;
}

export function atualizarTarefa(
  id: string | number,
  title?: string,
  completed?: boolean
): Task | null {
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

export function deletarTarefa(id: string | number): boolean {
  const index = tarefas.findIndex((tarefa) => tarefa.id === Number(id));

  if (index === -1) {
    return false;
  }

  tarefas.splice(index, 1);
  return true;
}