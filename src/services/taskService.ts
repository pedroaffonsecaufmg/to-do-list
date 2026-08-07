import { prisma } from '../config/prismaClient.js';
import { Prisma } from '../../generated/prisma/client.js';
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export function criarTarefa(title: string): Promise<Task> {
  return prisma.task.create({
    data: { title },
    })
  };

export async function getAll(): Promise<Task[]> {
  return prisma.task.findMany();
}

export function getById(id: string | number): Promise<Task | null> {
  return prisma.task.findUnique({
    where: { id: Number(id)},
  })
}

export async function atualizarTarefa(
  id: string | number,
  title?: string,
  completed?: boolean
): Promise<Task | null> {
  try {
    return await prisma.task.update({
      where: { id: Number(id) },
      data: {
        ...(title !== undefined && { title }),
        ...(completed !== undefined && { completed }),
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return null;
    }
    throw error;
  }
}

export async function deletarTarefa(id: string | number): Promise<boolean> {
  try {
    await prisma.task.delete({
      where: { id:Number(id)},
    });
    return true;
  } catch(error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return false;
    }
    throw error;
  }
}