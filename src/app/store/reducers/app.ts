import * as appActions from '../app.actions';
import { User } from '../../interfaces/user';
import { Message } from '../../interfaces/message';

export interface AppState {
    user: User;
    messages: Message[];
}

export const initialState: AppState = {
    user: null,
    messages: []
};

export function reducer(state = initialState, action: appActions.Actions): AppState {
    const types = appActions.ChatAppActionTypes;
    switch (action.type) {
        case types.setName:
            return {
                ...state,
                user: {
                    name: action.payload
                }
            };
        case types.sendMessage:
        case types.receiveMessage:
            const messages = [...state.messages];
            messages.push(action.payload);
            return {
                ...state,
                messages
            };
        default:
            return state;
    }
}
