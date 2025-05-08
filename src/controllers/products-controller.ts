import { Request, Response } from 'express';
import { AppError } from '../utils/app-error';
import { z } from 'zod';

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
    const bodySchema = z.object({
      name: z.string({ required_error: 'Name is required!' }),
      price: z.number({ required_error: 'Price is required!' }),
      // Poderia usar o nullish() para que o campo não fosse obrigatório.
      // price: z.number().nullish(),
    });

    const { name, price } = bodySchema.parse(request.body);

    /*
    if (!name) {
      throw new AppError('Nome do produto é obrigatório!');
    }

    if (name.trim().length < 6) {
      throw new AppError('Nome do produto deve ter pelo menos 6 caracteres!');
    }

    if (!price) {
      throw new AppError('Preço do produto é obrigatório!');
    }

    if (price < 0) {
      throw new AppError('Preço do produto não pode ser menor a zero!');
    }
    */

    // exemplo de erro
    // throw new Error('Erro ao tentar criar um produto!');
    // throw new AppError('Erro ao tentar criar um produto!');

    response.json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
