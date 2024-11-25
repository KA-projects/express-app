import { Router } from 'express';
import { makePayment } from '../controllers/payment.controller';

const router = Router();

router.post('/pay', makePayment);

export default router;