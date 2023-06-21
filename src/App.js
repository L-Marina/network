import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Profile from './pages/Profile';
import Dialogs from './pages/Dialogs';
import Users from './pages/Users';
import Images from './pages/Album/Icons';
import NotFoundPage from './pages/NotFoundPage';

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
