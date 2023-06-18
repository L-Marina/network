import { DIALOGS } from '../actionTypes/dialogs';

export const sendMessageCreator = () => ({
  type: DIALOGS.SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: DIALOGS.UPDATE_NEW_MESSAGE_BODY,
  payload: body,
});
