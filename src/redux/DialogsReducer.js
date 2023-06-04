const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Max' },
    { id: 3, name: 'Kate' },
    { id: 4, name: 'Victoria' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: "I'm thank." },
    { id: 4, message: 'Hello!' },
    { id: 5, message: 'Hi!' },
    { id: 6, message: 'Hello!' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE });

export default dialogsReducer;
