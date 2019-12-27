import { Action } from '@ngrx/store';
import { Message } from '../interfaces/message';

export enum ChatAppActionTypes {
    setName = '[Column] Set Name',
    sendMessage = '[Chat Composer] Send Message',
    sendWelcomeMessage = '[Chat Bot] Send Welcome Message',
    receiveMessage = '[API] Receive Message'
}

export class SetName implements Action {
    readonly type = ChatAppActionTypes.setName;
    constructor(public payload: string) { }
}

export class SendMessage implements Action {
    readonly type = ChatAppActionTypes.sendMessage;
    constructor(public payload: Message) { }
}

export class SendWelcomeMessage implements Action {
    readonly type = ChatAppActionTypes.sendWelcomeMessage;
}

export class ReceiveMessage implements Action {
    readonly type = ChatAppActionTypes.receiveMessage;
    constructor(public payload: Message) { }
}

export type Actions =
    | SetName
    | SendMessage
    | SendWelcomeMessage
    | ReceiveMessage
;
