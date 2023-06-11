import { DIALOGS } from '../actionTypes/dialogs';

const initialState = {
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
  newMessageTextBody: '',
};

const dialogsReducer = (state = initialState, action) => {
	
  switch (action.type) {
    case DIALOGS.UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case DIALOGS.SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 7, message: body }],
      };

    default:
      return state;
  }
};

export default dialogsReducer;
