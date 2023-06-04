import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import withRouter from './hoc/withRouter';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import { NotFoundPage } from './components/NotFound';

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);

const ProfileContainer = lazy(() =>
  import('./components/Profile/ProfileContainer')
);

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert('some error');
    // console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className='wrapper-app'>
        <HeaderContainer />
        <Navbar />
        <div className='wrapper-app-content'>
          <Routes>
            <Route path='/' element={<ProfileContainer />} />

            <Route
              path='/profile/:userId?'
              element={
                <Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>
              }
            />
            <Route
              path='/dialogs'
              element={
                <Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </Suspense>
              }
            />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

export default <AppContainer />;
