import express from 'express';

import { products } from '../../data.js';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  res.status(200).send(products);
});

export { router as indexTicketRouter };
