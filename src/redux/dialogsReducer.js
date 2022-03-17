const SEND_MESSAGE = 'SEND-MESSAGE'

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
    { id: 3, message: "I'm fine thank you" },
    { id: 4, message: 'Nice to meet you' },
    { id: 5, message: 'Would you like a cup of tea?' },
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      }
    }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer
