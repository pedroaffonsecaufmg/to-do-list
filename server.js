const express = require('express');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
app.use(express.json());

app.use(taskRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});