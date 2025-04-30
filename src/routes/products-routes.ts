import { Router } from 'express';
import { myMiddleware } from '../middleware/my-middleware';
import { ProductsController } from '../controllers/ProductsController';

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/', productsController.index);

// Middleware local em uma rota especifica.
productsRoutes.post('/', myMiddleware, productsController.create);

// Exportação mais explícita
export { productsRoutes };
