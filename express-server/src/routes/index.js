import express from 'express';

import { products, propTypes, storeProducts, tours } from '../../data/index.js';

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

router.get('/api/tours', async (rea, res) => {
  res.status(200).send(tours);
});

export { router as indexTicketRouter };
