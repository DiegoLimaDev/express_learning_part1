import express from 'express';
import { logger } from './logger.js';
import { router as peopleRouter } from './routes/people.js';
import { router as authRouter } from './routes/auth.js';

const app = express();
const PORT = 8000;
const middleware = [
  logger,
  express.static('./public/methods-public'),
  express.urlencoded({ extended: false }),
  express.json(),
];

app.listen(PORT);
app.use(middleware);
app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

// app.get('/', (req, res) => {
//   res.send(
//     `<h1>Home Page</h1><a href='/api/products'>products</a>\n<a href='/api/people'>people</a>`,
//   );
// });

// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((e) => {
//     const { id, name, image } = e;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// app.get('/api/products/:id', (req, res) => {
//   const { id } = req.params;
//   const singleProduct = products.find((e) => e.id === Number(id));
//   if (!singleProduct) return res.status(404).send(`<h1>Not found</h1>`);
//   return res.json(singleProduct);
// });

// app.get('/api/v1/query', (req, res) => {
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search)
//     sortedProducts = sortedProducts.filter((e) =>
//       e.name.toLowerCase().includes(search.toLowerCase()),
//     );

//   if (limit) sortedProducts = sortedProducts.slice(0, Number(limit));

//   if (sortedProducts.length < 1)
//     res.status(200).json({ success: true, data: [] });
//   // res.status(200).send('<h1>No matches for your query search</h1>');
//   res.json(sortedProducts);

//   // res.send('hello');
// });
