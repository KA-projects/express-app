import express from 'express';
import documentRoutes from './routes/document.routes';
import paymentRoutes from './routes/payment.routes';

const app = express();

app.use(express.json());

app.use('/payment', paymentRoutes);
app.use('/document', documentRoutes);

export default app;

