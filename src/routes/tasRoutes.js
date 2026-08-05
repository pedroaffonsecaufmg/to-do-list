const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', taskController.criar);
router.get('/tasks', taskController.listar);
router.get('/tasks/:id', taskController.buscarPorId);
router.put('/tasks/:id', taskController.atualizar);
router.delete('/tasks/:id', taskController.deletar);

module.exports = router;