import express from 'express';
import { PaymentContext } from './services/PaymentContext';
import { PaypalStrategy } from './services/PaypalStrategy';
import { CreditCardStrategy } from './services/CreditCardStrategy';

const app = express();

app.use('/pay/:method/:amount', (req, res) => {
  const { method, amount } = req.params;

  const paymentContext = new PaymentContext();

  switch (method) {
    case 'paypal':
      paymentContext.setPaymentStrategy(new PaypalStrategy());
      break;
    
    case 'creditCard':
      paymentContext.setPaymentStrategy(new CreditCardStrategy());
      break;
    
    default:
      res.status(400).send('wrong request');
      return;
  }

  const result = paymentContext.executePayment(Number(amount));
  res.send(result + '\n');
});

const port = 5151;

app.listen(port, () => {
  console.log('server run on: ' + port);
});
