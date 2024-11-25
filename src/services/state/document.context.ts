import { DocumentState } from "./document.interface";
import { DraftState } from "./states/draft.state";
import { ModerationState } from "./states/moderation.state";
import { PublishedState } from "./states/published.state";

export class Document implements DocumentState{
    public draftState: DocumentState;
    public moderationState: DocumentState;
    public publishedState: DocumentState;

    private state: DocumentState;

    constructor() {
        this.draftState = new DraftState(this);
        this.moderationState = new ModerationState(this);
        this.publishedState = new PublishedState(this);
        this.state = this.draftState;
    }

    setState(state: DocumentState): void {
        this.state = state;
    }

    publish(): void {
        this.state.publish();
    }

    getStateName(): string {
        return this.state.getStateName();
    }
}