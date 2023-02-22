import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import sidebarReducer from './SidebarReducer';
import UsersReducer from './UsersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: UsersReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
