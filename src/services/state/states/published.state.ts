import { DocumentState } from '../document.interface';
import { Document } from '../document.context';

export class PublishedState implements DocumentState {
    constructor(private document: Document) {}

    publish(): void {
        console.log('Document is already Published. No further transitions allowed.');
    }

    getStateName(): string {
        return 'Published';
    }
}
