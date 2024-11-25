import { DocumentState } from '../document.interface';
import { Document } from '../document.context';

export class ModerationState implements DocumentState {
    constructor(private document: Document) {}

    publish(): void {
        this.document.setState(this.document.publishedState);
    }

    getStateName(): string {
        return 'Moderation';
    }
}
