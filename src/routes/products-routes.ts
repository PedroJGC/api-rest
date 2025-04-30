import { Router } from 'express';
import { myMiddleware } from '../middleware/my-middleware';

const productsRoutes = Router();

productsRoutes.get('/:id', (request, response) => {
  const { page, limit } = request.query;
  const { id } = request.params;

  response.send(`Página ${page} de ${limit} - ID: ${id}`);
});

// Middleware local em uma rota especifica.
productsRoutes.post('/', myMiddleware, (request, response) => {
  const { name, price } = request.body;

  response.json({ name, price, user_id: request.user_id });
});

// Exportação mais explícita
export { productsRoutes };
