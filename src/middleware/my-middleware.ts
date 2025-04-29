import { Request, Response, NextFunction } from 'express';

export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  request.user_id = '123456';

  console.log('Passou pelo Middleware');

  return next();
}
