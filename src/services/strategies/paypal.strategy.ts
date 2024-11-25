import { PaymentStrategy } from './payment.interface';

export class PaypalStrategy implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid ${amount} using Paypal`;
    }
}