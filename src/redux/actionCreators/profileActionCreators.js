import { PROFILE } from '../actionTypes/profile';

export const addPostActionCreator = () => ({ type: PROFILE.ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: PROFILE.UPDATE_NEW_POST_TEXT,
  newText: text,
});
