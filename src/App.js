import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Profile from './pages/Profile/Profile';
import Dialogs from './pages/Dialogs/Dialogs';
import Users from './pages/Users/Users';
import Images from './pages/Album/Icons';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

// import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='profile' element={<Profile />} />
          <Route path='dialogs' element={<Dialogs />} />
          <Route path='users' element={<Users />} />
          <Route path='images' element={<Images />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
