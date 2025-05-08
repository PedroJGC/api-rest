import express, { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

import { routes } from './routes';

import { AppError } from './utils/app-error';

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

/**
 * 400 (Bad Request): Erro do cliente.
 * 500 (Internal Server Error): Erro interno do servidor.
 */
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response
      .status(400)
      .json({ message: 'Validation error!', issues: error.format() });
  }

  response.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
