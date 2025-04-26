import express from 'express';

const PORT = 3333;

const app = express();
app.use(express.json());

app.get('/products', (request, response) => {
  const { page, limit } = request.query;

  response.send(`Página ${page} de ${limit}`);
});

app.post('/products', (request, response) => {
  const { name, price } = request.body;

  // response.send(`Produto ${name} custa ${price}`);

  // status code: response.status(201).json({ name, price });

  response.json({ name, price });
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
