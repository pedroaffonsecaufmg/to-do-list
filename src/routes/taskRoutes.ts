import { Router } from 'express';
import * as taskController from '../controllers/taskController';

const router = Router();

router.post('/tasks', taskController.criar);
router.get('/tasks', taskController.listar);
router.get('/tasks/:id', taskController.buscarPorId);
router.put('/tasks/:id', taskController.atualizar);
router.delete('/tasks/:id', taskController.deletar);

export default router;