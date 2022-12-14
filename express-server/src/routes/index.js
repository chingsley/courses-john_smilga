import express from 'express';

import {
  carts,
  products,
  propTypes,
  storeProducts,
  tabs,
  tours
} from '../../data/index.js';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  res.status(200).send(products);
});

router.get('/api/prop-types-example', async (req, res) => {
  res.status(200).send(propTypes);
});

router.get('/api/javascript-store-products', async (req, res) => {
  res.status(200).send(storeProducts);
});

router.get('/api/tours', async (rea, res) => {
  res.status(200).send(tours);
});

router.get('/api/react-tabs-project', async (rea, res) => {
  res.status(200).send(tabs);
});

router.get('/api/react-useReducer-cart-project', async (req, res) => {
  res.status(200).send(carts);
});


export { router as indexTicketRouter };
