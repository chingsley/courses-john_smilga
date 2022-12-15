import express from 'express';

import { products, propTypes, storeProducts } from '../../data/index.js';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  res.status(200).send(products);
});

router.get('/api/prop-types-example', async (rea, res) => {
  res.status(200).send(propTypes);
});

router.get('/api/javascript-store-products', async (rea, res) => {
  res.status(200).send(storeProducts);
});

export { router as indexTicketRouter };
