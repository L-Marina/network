import { PROFILE } from '../actionTypes/profile';

const initialState = {
  posts: [
    { id: 1, message: 'Hello!', likesCount: 11 },
    { id: 2, message: 'Hi, how are you?', likesCount: 20 },
  ],
  newPostText: 'IT',
};

const profileReducer = (state = initialState, action) => {
	
  switch (action.type) {
    case PROFILE.ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }

    case PROFILE.UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
