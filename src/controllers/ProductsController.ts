import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';

class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name || !price) {
      throw new AppError('Nome e preço do produto são obrigatórios!');
    }

    // exemplo de erro
    // throw new Error('Erro ao tentar criar um produto!');
    // throw new AppError('Erro ao tentar criar um produto!');

    response.json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
