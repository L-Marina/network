import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import sidebarReducer from './SidebarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello!', likesCount: 11 },
        { id: 2, message: 'Hi, how are you?', likesCount: 20 },
      ],
      newPostText: 'IT',
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
