import { combineReducers } from 'redux';

import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import sidebarReducer from './SidebarReducer';
import UsersReducer from './UsersReducer';
import authReducer from './auth-reducer';
//import { formReducer } from 'redux-form';
import appReducer from './app-reducer';

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: UsersReducer,
  auth: authReducer,
  //form: formReducer,
  app: appReducer,
});
