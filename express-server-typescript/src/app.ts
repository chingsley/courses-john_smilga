import express from 'express';
// import 'express-async-errors';

// import { errorHandler } from './middlewares/errorHandler';
// import { NotFoundError } from './errors/notFoundError';
// import { indexTicketRouter } from './routes';

const app = express();
// app.set('trust proxy', true);
// app.use(express.json());


// app.get('/api/users/healthcheck', (req, res) => {
//   res.send('Auth service is up and running...');
// });

// app.use(indexTicketRouter);

// app.all('*', async () => {
//   throw new NotFoundError();
// });

// app.use(errorHandler);

export { app };
