import { PaymentStrategy } from './payment.interface';

export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    executePayment(amount: number): string {
        return this.strategy.pay(amount);
    }
}