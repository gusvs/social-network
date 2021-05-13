const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Stas' },
        { id: 3, name: 'Egor' },
        { id: 4, name: 'Ivan' },
        { id: 5, name: 'Oleg' },
    ],
    messages: [
        { id: 1, message: 'Hello, how are you?' },
        { id: 2, message: 'Good-bye, see you later' },
        { id: 3, message: 'I\'m fine thank you' },
        { id: 4, message: 'Nice to meet you' },
        { id: 5, message: 'Would you like a cup of tea?' },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;