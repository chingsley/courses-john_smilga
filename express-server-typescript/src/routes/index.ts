
import express, { Request, Response } from 'express';
import products from '../../data.json';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
  res.status(200).send(products);
});

export { router as indexTicketRouter };
