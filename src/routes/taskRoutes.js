const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', taskController.criar);
router.get('/tasks', taskController.listar);
router.get('/tasks/:id', taskController.buscarPorId);

module.exports = router;''