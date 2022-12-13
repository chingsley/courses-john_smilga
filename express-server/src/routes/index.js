import express from 'express';

import { products, propTypes } from '../../data/index.js';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  res.status(200).send(products);
});

router.get('/api/prop-types-example', async (rea, res) => {
  res.status(200).send(propTypes);
});

export { router as indexTicketRouter };
