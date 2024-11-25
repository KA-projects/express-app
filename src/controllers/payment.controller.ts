import { CreditCardStrategy } from "../services/strategies/creditCard.strategy";
import { PaymentContext } from "../services/strategies/payment.context";
import { PaypalStrategy } from "../services/strategies/paypal.strategy";
import { ExpressHandler } from "../types";

export const makePayment: ExpressHandler = (req, res) => {
    const { method, amount } = req.body;
  
    const paymentContext = new PaymentContext(new CreditCardStrategy());
    
    switch (method) {
      case 'paypal':
        paymentContext.setPaymentStrategy(new PaypalStrategy());
        break;
      
      case 'creditCard':
        paymentContext.setPaymentStrategy(new CreditCardStrategy());
        break;
      
      default:
        return res.status(400).json({ message: 'Invalid payment mehtod'});
    }
  
    const result = paymentContext.executePayment(Number(amount));
    res.json({result});
}