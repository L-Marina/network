import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper-app">
        <Header />
        <Navbar />
        <div className="wrapper-app-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path="/dialogs"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
