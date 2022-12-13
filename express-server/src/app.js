import express from 'express';
import 'express-async-errors';

import { errorHandler } from './middlewares/errorHandler.js';
import { NotFoundError } from './errors/notFoundError.js';
import { indexTicketRouter } from './routes/index.js';

const app = express();
app.set('trust proxy', true);
app.use(express.json());


app.get('/api/users/healthcheck', (req, res) => {
  res.send('Auth service is up and running...');
});

app.use(indexTicketRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
