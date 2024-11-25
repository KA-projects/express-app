import { DocumentState } from '../document.interface';
import { Document } from '../document.context';

export class DraftState implements DocumentState {
    constructor(private document: Document) {}

    publish(): void {
        this.document.setState(this.document.moderationState);
    }

    getStateName(): string {
        return 'Draft';
    }
}
