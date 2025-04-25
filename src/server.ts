import express from 'express';

const PORT = 3333;

const app = express();

app.get('/products', (request, response) => {
  // /products?page=1&limit=10
  const { page, limit } = request.query;

  response.send(`Página ${page} de ${limit}`);
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
