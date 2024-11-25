import { Document } from '../services/state/document.context';
import { ExpressHandler } from '../types';

const document = new Document();

export const getState: ExpressHandler = (req, res) => {
    res.json({
        currentState: document.getStateName()
    });
}

export const publishDocument: ExpressHandler = (req, res) => {
    document.publish();
    res.json({
        message: 'State transitioned',
        currentState: document.getStateName()
    });
}
