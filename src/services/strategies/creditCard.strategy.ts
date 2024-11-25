import { PaymentStrategy } from "./payment.interface";

export class CreditCardStrategy implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid ${amount} using Credit card`;
    }
}