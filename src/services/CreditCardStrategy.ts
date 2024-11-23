import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardStrategy implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid ${amount} using Credit card`;
    }
}