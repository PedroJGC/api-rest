import express from 'express';
import { myMiddleware } from './middleware/my-middleware';

const PORT = 3333;

const app = express();
app.use(express.json());

// Middleware global (aplica para todas as rotas a baixo.)
// app.use(myMiddleware);

app.get('/products', (request, response) => {
  const { page, limit } = request.query;

  response.send(`Página ${page} de ${limit}`);
});

// Middleware local em uma rota especifica.
app.post('/products', myMiddleware, (request, response) => {
  const { name, price } = request.body;

  response.json({ name, price, user_id: request.user_id });
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
