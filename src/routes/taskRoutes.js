const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', taskController.criar);
router.get('/tasks', taskController.listar);

module.exports = router;''